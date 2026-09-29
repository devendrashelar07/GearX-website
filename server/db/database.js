import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'gearx.db');
const db = new Database(dbPath, { verbose: console.log });

// Initialize database schema
export const initDb = () => {
  const createGaragesTable = `
    CREATE TABLE IF NOT EXISTS garages (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      location TEXT NOT NULL,
      distance REAL,
      image TEXT
    );
  `;

  const createServicesTable = `
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      garage_id TEXT,
      name TEXT,
      price INTEGER,
      FOREIGN KEY (garage_id) REFERENCES garages (id) ON DELETE CASCADE
    );
  `;
  
  // Create tables
  db.exec(createGaragesTable);
  db.exec(createServicesTable);

  // Check if we need to seed data
  const stmt = db.prepare('SELECT COUNT(*) AS count FROM garages');
  const result = stmt.get();
  
  if (result.count === 0) {
    seedData();
  }
};

const seedData = () => {
  console.log('Seeding initial data...');
  const garages = [
    {
      id: 'g1',
      name: 'Elite Auto Care',
      type: 'garage',
      location: '123 Main St, Downtown',
      distance: 2.5,
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        { name: 'General Service', price: 150 },
        { name: 'Brake Repair', price: 200 }
      ]
    },
    {
      id: 'g2',
      name: 'QuickWash Pro',
      type: 'wash',
      location: '456 West Ave, Suburbia',
      distance: 3.8,
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        { name: 'Exterior Wash', price: 20 },
        { name: 'Full Detailing', price: 80 }
      ]
    },
    {
      id: 'g3',
      name: 'VoltCharge Station',
      type: 'ev',
      location: '789 Tech Park, North',
      distance: 1.2,
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        { name: 'Fast Charging (kW/h)', price: 15 }
      ]
    },
    {
      id: 'g4',
      name: 'Mobile Mechanics',
      type: 'home',
      location: 'Serving All Areas',
      distance: 0,
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      services: [
        { name: 'Home Inspection', price: 50 },
        { name: 'Oil Change at Home', price: 70 }
      ]
    }
  ];

  const insertGarage = db.prepare(`
    INSERT INTO garages (id, name, type, location, distance, image)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const insertService = db.prepare(`
    INSERT INTO services (garage_id, name, price)
    VALUES (?, ?, ?)
  `);

  const transaction = db.transaction((garagesList) => {
    for (const g of garagesList) {
      insertGarage.run(g.id, g.name, g.type, g.location, g.distance, g.image);
      if (g.services) {
        for (const s of g.services) {
          insertService.run(g.id, s.name, s.price);
        }
      }
    }
  });

  transaction(garages);
  console.log('Seeding complete.');
};

initDb();

export default db;
