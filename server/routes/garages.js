import express from 'express';
import db from '../db/database.js';

const router = express.Router();

// Get all garages (optionally filter by type)
router.get('/', (req, res) => {
  try {
    const { type } = req.query;
    let query = 'SELECT * FROM garages';
    let params = [];
    
    if (type && type !== 'all') {
      query += ' WHERE type = ?';
      params.push(type);
    }
    
    const garages = db.prepare(query).all(...params);
    
    // Attach services to each garage
    const garagesWithServices = garages.map(garage => {
      const services = db.prepare('SELECT name, price FROM services WHERE garage_id = ?').all(garage.id);
      return { ...garage, services };
    });
    
    res.json(garagesWithServices);
  } catch (error) {
    console.error('Error fetching garages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific garage by ID
router.get('/:id', (req, res) => {
  try {
    const garage = db.prepare('SELECT * FROM garages WHERE id = ?').get(req.params.id);
    
    if (!garage) {
      return res.status(404).json({ error: 'Garage not found' });
    }
    
    const services = db.prepare('SELECT name, price FROM services WHERE garage_id = ?').all(garage.id);
    garage.services = services;
    
    res.json(garage);
  } catch (error) {
    console.error('Error fetching garage:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new garage
router.post('/', (req, res) => {
  try {
    const { id, name, type, location, distance, image, services } = req.body;
    
    // Validate required fields
    if (!id || !name || !type || !location) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const insertGarage = db.prepare(`
      INSERT INTO garages (id, name, type, location, distance, image)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    
    const insertService = db.prepare(`
      INSERT INTO services (garage_id, name, price)
      VALUES (?, ?, ?)
    `);
    
    db.transaction(() => {
      insertGarage.run(id, name, type, location, distance || 0, image || '');
      if (services && Array.isArray(services)) {
        for (const s of services) {
          insertService.run(id, s.name, s.price);
        }
      }
    })();
    
    res.status(201).json({ message: 'Garage created successfully', id });
  } catch (error) {
    console.error('Error creating garage:', error);
    if (error.code === 'SQLITE_CONSTRAINT_PRIMARYKEY') {
      return res.status(409).json({ error: 'Garage with this ID already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
