import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, MapPin, Car, Bike, Zap, Bell, CheckCircle2, Clock, Wrench, 
  ArrowRight, Building2, Sparkles, ChevronRight, Navigation, Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GarageFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [selectedVehicle, setSelectedVehicle] = useState('Car');
  const [notifyInput, setNotifyInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Backend Integration State
  const [garages, setGarages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from our Node.js Backend API
  useEffect(() => {
    const fetchGarages = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:5000/api/garages`);
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setGarages(data);
      } catch (err) {
        console.error(err);
        setError('Could not connect to GearX database.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGarages();
  }, []);

  const vehicleOptions = [
    { id: 'Car', label: 'Cars', icon: Car },
    { id: 'Bike', label: 'Bikes', icon: Bike },
    { id: 'EV', label: 'EVs', icon: Zap }
  ];

  const cities = ['Mumbai', 'Bengaluru', 'Delhi NCR', 'Pune', 'Hyderabad', 'Chennai', 'Ahmedabad'];

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (notifyInput.trim()) setIsSubscribed(true);
  };

  // Filter garages locally based on search query
  const filteredGarages = garages.filter(g => 
    g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#07090e] cyber-grid">
      {/* Header Banner */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono uppercase tracking-wider mb-6">
              <Database className="w-4 h-4" />
              <span>Live SQLite Database Connected</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight mb-4">
              Find Your Perfect Garage
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              GearX verified automotive repair centres and certified specialists across India.
            </p>
          </motion.div>

          {/* Interactive Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 max-w-4xl mx-auto glass-card p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <div className="md:col-span-4 relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00e5ff]" />
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#00e5ff] appearance-none cursor-pointer">
                  {cities.map(c => <option key={c} value={c} className="bg-[#0f141f] text-white">{c}</option>)}
                </select>
              </div>
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search by area or service requirement..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#00e5ff]" />
              </div>
              <div className="md:col-span-3 flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl p-1">
                {vehicleOptions.map(v => {
                  const Icon = v.icon;
                  return (
                    <button key={v.id} onClick={() => setSelectedVehicle(v.id)} className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all ${selectedVehicle === v.id ? 'bg-[#00e5ff] text-[#07090e] font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]' : 'text-gray-400 hover:text-white'}`}>
                      <Icon className="w-3.5 h-3.5" /><span>{v.id}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isLoading ? (
           <div className="flex flex-col items-center justify-center py-20 gap-4">
             <div className="w-12 h-12 border-4 border-[#00e5ff]/30 border-t-[#00e5ff] rounded-full animate-spin"></div>
             <p className="text-gray-400 font-mono text-sm">Querying Database...</p>
           </div>
        ) : error ? (
           <div className="text-center py-20 text-red-400 bg-red-400/10 rounded-2xl border border-red-400/20 max-w-2xl mx-auto">
             <p>{error}</p>
             <p className="text-sm mt-2">Make sure your backend server is running on localhost:5000</p>
           </div>
        ) : filteredGarages.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
             {filteredGarages.map((garage, i) => (
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 key={garage.id} 
                 className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#00e5ff]/50 transition-all duration-300 group shadow-2xl hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
               >
                 <div className="h-48 relative overflow-hidden bg-dark-800">
                   {garage.image ? (
                     <img src={garage.image} alt={garage.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center">
                       <Building2 className="w-12 h-12 text-gray-600" />
                     </div>
                   )}
                   <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                     <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse"></span>
                     {garage.type}
                   </div>
                 </div>
                 
                 <div className="p-6">
                   <h3 className="text-xl font-heading font-bold text-white mb-2">{garage.name}</h3>
                   <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
                     <div className="flex items-center gap-1">
                       <MapPin className="w-4 h-4 text-[#00e5ff]" />
                       <span className="truncate max-w-[120px]">{garage.location}</span>
                     </div>
                     <span className="text-white/20">•</span>
                     <div className="flex items-center gap-1">
                       <Navigation className="w-3.5 h-3.5 text-amber-400" />
                       <span>{garage.distance} km away</span>
                     </div>
                   </div>
                   
                   <div className="space-y-2 mb-6">
                     {garage.services && garage.services.map((service, idx) => (
                       <div key={idx} className="flex items-center justify-between text-sm p-3 rounded-xl bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.05] transition-colors">
                         <span className="text-gray-300 font-medium">{service.name}</span>
                         <span className="text-[#00e676] font-mono font-bold">₹{service.price}</span>
                       </div>
                     ))}
                   </div>

                   <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-[#00e5ff] hover:to-[#00b3cc] border border-white/10 hover:border-transparent text-white hover:text-black font-heading font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2">
                     <span>Book Appointment</span>
                     <ArrowRight className="w-4 h-4" />
                   </button>
                 </div>
               </motion.div>
             ))}
           </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card border-2 border-amber-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center mb-16"
          >
            <div className="w-20 h-20 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto mb-6 text-amber-400">
              <Wrench className="w-10 h-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
              No Garages Found
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              We couldn't find any verified garages matching your search criteria. Try a different location or search term.
            </p>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default GarageFinder;
