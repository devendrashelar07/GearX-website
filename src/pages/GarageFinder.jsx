import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Car, 
  Bike, 
  Zap, 
  Bell, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  ArrowRight, 
  Building2,
  Sparkles,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui';
import { Link } from 'react-router-dom';

const GarageFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [selectedVehicle, setSelectedVehicle] = useState('Car');
  const [notifyInput, setNotifyInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const vehicleOptions = [
    { id: 'Car', label: 'Cars', icon: Car },
    { id: 'Bike', label: 'Bikes', icon: Bike },
    { id: 'EV', label: 'EVs', icon: Zap }
  ];

  const cities = [
    'Mumbai', 'Bengaluru', 'Delhi NCR', 'Pune', 'Hyderabad', 'Chennai', 'Ahmedabad'
  ];

  const onboardingStages = [
    { stage: 'Phase 1', title: 'Workshop Infrastructure & Tool Verification', status: 'Completed', date: 'Q3 2024' },
    { stage: 'Phase 2', title: 'Mechanic Certification & Diagnostic Sync', status: 'In Progress', date: 'Current' },
    { stage: 'Phase 3', title: 'Transparent Rate Card Standardization', status: 'In Progress', date: 'Current' },
    { stage: 'Phase 4', title: 'Live Booking & Real-Time Bay Tracking', status: 'Upcoming', date: 'Launch Ready' }
  ];

  const previewHighlights = [
    {
      title: '100% Genuine OEM / OES Parts',
      desc: 'Strict traceability on engine oil, brake pads, and replacement components.'
    },
    {
      title: 'Transparent Upfront Estimates',
      desc: 'No hidden charges. Approve digital job cards before technicians begin work.'
    },
    {
      title: 'Warranty-Backed Servicing',
      desc: 'Every service completed at a verified GearX garage includes warranty protection.'
    }
  ];

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (notifyInput.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#07090e] cyber-grid">
      {/* Header Banner */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-6">
              <Clock className="w-4 h-4" />
              <span>Platform Update: Onboarding in Progress</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight mb-4">
              Find Your Perfect Garage
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              GearX is vetting automotive repair centres and certified specialists across India.
            </p>
          </motion.div>

          {/* Interactive Search / Filter Bar (Visual Prototype) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 max-w-4xl mx-auto glass-card p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              
              {/* Location Select */}
              <div className="md:col-span-4 relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00e5ff]" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#00e5ff] appearance-none cursor-pointer"
                >
                  {cities.map(c => (
                    <option key={c} value={c} className="bg-[#0f141f] text-white">{c}</option>
                  ))}
                </select>
              </div>

              {/* Search Query */}
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by area or service requirement..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#00e5ff]"
                />
              </div>

              {/* Vehicle Mode Tabs */}
              <div className="md:col-span-3 flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl p-1">
                {vehicleOptions.map(v => {
                  const Icon = v.icon;
                  const isChosen = selectedVehicle === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVehicle(v.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all ${
                        isChosen
                          ? 'bg-[#00e5ff] text-[#07090e] font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{v.id}</span>
                    </button>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Main Content Area: Prominent "Garages are yet to be listed" Announcement */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Central Status Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card border-2 border-amber-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center mb-16 shadow-[0_0_50px_-15px_rgba(245,158,11,0.15)]"
        >
          {/* Ambient Amber Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#00e5ff]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Central Icon */}
          <div className="w-20 h-20 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto mb-6 text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
            <Wrench className="w-10 h-10" />
          </div>

          {/* Explicit User-Requested Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
            Garages Are Yet To Be Listed
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We are currently running rigorous verification audits on independent garages, authorized workshops, and EV service hubs in <span className="text-white font-semibold underline decoration-[#00e5ff] decoration-2">{selectedCity}</span>. No unverified garages are listed to ensure your vehicle only receives certified care.
          </p>

          {/* Notify Me Form */}
          <div className="max-w-md mx-auto mb-10">
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-[#00e676]/10 border border-[#00e676]/30 text-[#00e676] text-sm flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>You're on the priority list! We'll alert you when garages open in {selectedCity}.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for launch alerts..."
                  value={notifyInput}
                  onChange={(e) => setNotifyInput(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#07090e] font-heading font-bold text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 shrink-0"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notify Me</span>
                </button>
              </form>
            )}
            <p className="text-xs text-gray-500 mt-2">Zero spam. Only notified when verified garages launch in your area.</p>
          </div>

          {/* Garage Owner Direct CTA */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-gray-400">Own a garage or multi-brand service centre?</span>
            <Link
              to="/register-business"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-semibold text-sm transition-all text-[#00e5ff] hover:border-[#00e5ff]/40"
            >
              <Building2 className="w-4 h-4 text-[#00e5ff]" />
              <span>Register Your Garage on GearX</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Onboarding Roadmap Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              GearX Garage Quality Guarantee
            </h3>
            <p className="text-sm text-gray-400">
              Why we don't list unverified garages. Here is our 4-stage partner qualification protocol:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {onboardingStages.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-3">
                    <span className="text-[#00e5ff] font-bold">{item.stage}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                      item.status === 'Completed'
                        ? 'bg-[#00e676]/10 text-[#00e676] border border-[#00e676]/30'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug mb-2">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-500 flex items-center justify-between">
                  <span>Timeline</span>
                  <span className="text-gray-300 font-mono">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What To Expect Section */}
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-2.5 text-xs uppercase font-mono tracking-wider text-[#00e5ff] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Upcoming Directory Features</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-6">
            Standard at Every GearX Garage
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewHighlights.map((feat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center font-bold text-sm mb-3">
                  0{i + 1}
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{feat.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GarageFinder;
