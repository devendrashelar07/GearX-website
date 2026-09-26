import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  MapPin, 
  Calendar, 
  DollarSign, 
  BatteryCharging, 
  UserPlus, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Sparkles,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EVCharging = () => {
  const [activeTab, setActiveTab] = useState('find');
  const [showModal, setShowModal] = useState(false);

  const evFeatures = [
    { title: 'Smart Charging Point Discovery', desc: 'Real-time locator for high-speed DC & standard AC stations across arterial highways and city hubs.', icon: Zap },
    { title: 'Live Bay & Plug Availability', desc: 'Know connector availability before you arrive. Zero wait queues with synchronized slot locks.', icon: BatteryCharging },
    { title: 'Guaranteed Advance Booking', desc: 'Reserve your charging slot 15-60 minutes in advance with instant QR access.', icon: Calendar },
    { title: 'Turn-by-Turn GPS Navigation', desc: 'Direct routing with altitude and temperature-adjusted vehicle range estimations.', icon: MapPin },
    { title: 'Transparent Dynamic Pricing', desc: 'Clear per-kWh billing with off-peak tariff notifications and digital tax invoices.', icon: DollarSign },
    { title: 'Peer-to-Peer Host Registration', desc: 'Monetize your residential or commercial wallbox by listing it for fellow EV drivers.', icon: UserPlus },
  ];

  return (
    <section id="ev-charging" className="py-24 lg:py-32 relative bg-[#07090e] overflow-hidden cyber-grid">
      {/* Intense EV Green Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#00e676]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#00e5ff]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e676]/10 border border-[#00e676]/30 text-[#00e676] text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Zap className="w-4 h-4" />
            <span>Next-Gen Electric Mobility Grid</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4"
          >
            Power Your EV. <span className="gradient-text-ev">Anywhere.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
          >
            Locate high-speed public chargers or monetize your private wallbox. GearX connects EV owners with available charging points across the country.
          </motion.p>
        </div>

        {/* 2-Column Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Feature Matrix */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {evFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div 
                    key={idx} 
                    className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#00e676]/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00e676]/15 text-[#00e676] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-heading font-bold text-white mb-1.5">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00e676] hover:bg-[#00e676]/90 text-[#07090e] font-heading font-bold text-sm shadow-[0_0_20px_rgba(0,230,118,0.35)] transition-all flex items-center justify-center gap-2"
              >
                <span>Find Charging Points</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/register-business"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#00e676]/40 text-[#00e676] font-heading font-semibold text-sm transition-all text-center"
              >
                Register Your Charger & Earn
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Cybernetic EV Supercharger Station Graphic */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#00e676]/30 shadow-[0_0_40px_rgba(0,230,118,0.15)] relative overflow-hidden">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#00e676]">
                  <span className="w-2 h-2 rounded-full bg-[#00e676] animate-ping" />
                  <span className="font-bold uppercase tracking-wider">GEARX MEGAWATT GRID</span>
                </div>
                <span className="text-gray-400">STATUS: 480V ACTIVE</span>
              </div>

              {/* High-Tech Vector Supercharger Station & Vehicle Concept */}
              <div className="py-6 flex items-center justify-center">
                <svg viewBox="0 0 500 380" className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,230,118,0.25)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="chargerBody" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0a0f18" />
                    </linearGradient>
                    <linearGradient id="evGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>

                  {/* Ground platform with neon glow line */}
                  <line x1="30" y1="340" x2="470" y2="340" stroke="#00e676" strokeWidth="2" opacity="0.6" />
                  <ellipse cx="250" cy="340" rx="200" ry="15" fill="#00e676" opacity="0.1" />

                  {/* EV Charging Station Tower (Left) */}
                  <rect x="70" y="80" width="100" height="260" rx="16" fill="url(#chargerBody)" stroke="#334155" strokeWidth="2" />
                  <rect x="85" y="105" width="70" height="55" rx="8" fill="#020617" stroke="#00e676" strokeWidth="1.5" />
                  
                  {/* Station Digital Screen */}
                  <text x="93" y="125" fill="#00e676" fontSize="10" fontFamily="monospace" fontWeight="bold">CHARGING: 84%</text>
                  <text x="93" y="140" fill="#94a3b8" fontSize="8" fontFamily="monospace">150 kW • 12 MINS</text>
                  <rect x="93" y="147" width="54" height="4" rx="2" fill="#1e293b" />
                  <rect x="93" y="147" width="45" height="4" rx="2" fill="#00e676" />

                  {/* Glowing Status Halo on Charger */}
                  <circle cx="120" cy="195" r="16" fill="#00e676" fillOpacity="0.15" stroke="#00e676" strokeWidth="2" />
                  <path d="M120 187 L115 196 L121 196 L119 205 L126 195 L120 195 Z" fill="#00e676" />

                  {/* Charging Cable curving toward car */}
                  <path d="M150 240 C 180 240 190 320 250 300 C 270 290 280 260 290 240" fill="none" stroke="#00e676" strokeWidth="4" strokeLinecap="round" />
                  <path d="M150 240 C 180 240 190 320 250 300 C 270 290 280 260 290 240" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" />

                  {/* Plug Connector Handle */}
                  <rect x="285" y="235" width="18" height="10" rx="3" fill="#00e676" />

                  {/* EV Car Silhouette Front Profile */}
                  <path d="M290 240 C 310 220 350 210 390 210 C 430 210 460 225 475 255 L 485 295 L 300 295 Z" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                  <path d="M340 210 C 360 170 410 170 440 210 Z" fill="#0369a1" fillOpacity="0.3" stroke="#00e5ff" strokeWidth="1.5" />
                  <ellipse cx="440" cy="295" rx="25" ry="25" fill="#090d16" stroke="#00e676" strokeWidth="2.5" />
                  <circle cx="440" cy="295" r="8" fill="#00e676" />

                  {/* EV Pulse Rings */}
                  <circle cx="120" cy="195" r="28" stroke="#00e676" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                </svg>
              </div>

              {/* Station Capability Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                <div className="p-2 rounded-xl bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Connector Types</span>
                  <span className="font-heading font-bold text-white text-xs sm:text-sm">CCS2 / AC Type-2</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Bay Access</span>
                  <span className="font-heading font-bold text-[#00e676] text-xs sm:text-sm">Instant Slot Lock</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03]">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Host Payouts</span>
                  <span className="font-heading font-bold text-white text-xs sm:text-sm">Direct Bank</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Quick EV Point Finder Modal Prototype */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-2xl border border-[#00e676]/30 relative text-left"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#00e676] uppercase mb-2">
                <Zap className="w-4 h-4" />
                <span>Station Locator Network</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Available EV Charging Points
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Active stations ready for plug & charge reservation near your area:
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { name: 'GearX MegaHub BKC', type: '60 kW CCS2 DC Fast', distance: '1.4 km', rate: '₹14 / kWh', bays: '4 Available' },
                  { name: 'GreenDrive Hub - Indiranagar', type: '120 kW Ultra-Fast', distance: '3.1 km', rate: '₹16 / kWh', bays: '2 Available' },
                  { name: 'EcoVolt Host Station #82', type: '22 kW AC Type-2', distance: '4.5 km', rate: '₹12 / kWh', bays: '1 Available' }
                ].map((station, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white">{station.name}</h4>
                      <p className="text-xs text-gray-400">{station.type} • {station.distance}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-[#00e676] block">{station.bays}</span>
                      <span className="text-xs text-white font-semibold">{station.rate}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 rounded-xl bg-[#00e676] text-[#07090e] font-heading font-bold text-sm transition-all shadow-[0_0_15px_rgba(0,230,118,0.3)]"
                >
                  Reserve Chosen Bay
                </button>
                <Link
                  to="/register-business"
                  className="px-4 py-3 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/15 flex items-center justify-center"
                >
                  Host Charger
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EVCharging;
