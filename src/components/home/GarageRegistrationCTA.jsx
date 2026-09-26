import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Wrench, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Users, 
  Check, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GarageRegistrationCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    garageName: '',
    ownerName: '',
    phone: '',
    city: 'Mumbai',
    bays: '3-5 Bays',
    services: ['General Service', 'Engine Repair']
  });

  const cities = ['Mumbai', 'Bengaluru', 'Delhi NCR', 'Pune', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Kolkata'];
  const bayOptions = ['1-2 Bays', '3-5 Bays', '6-10 Bays', '10+ Super Workshop'];
  
  const availableServices = [
    'General Service',
    'Engine Diagnostics',
    'Brake & Suspension',
    'Denting & Painting',
    'AC & Electricals',
    'Wheel Alignment'
  ];

  const handleServiceToggle = (serviceName) => {
    if (formData.services.includes(serviceName)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== serviceName)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, serviceName]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.garageName && formData.ownerName && formData.phone) {
      setSubmitted(true);
    }
  };

  const perks = [
    {
      title: 'High-Intent Local Customers',
      desc: 'Connect with car, bike, and EV owners searching for trusted workshops in your area.',
      icon: Users
    },
    {
      title: 'Digital Job Cards & Estimates',
      desc: 'Transparent digital approvals for parts and labor. Zero customer payment disputes.',
      icon: ShieldCheck
    },
    {
      title: 'Zero Onboarding Cost',
      desc: '100% free registration during our onboarding phase. No hidden listing fees.',
      icon: TrendingUp
    },
    {
      title: 'Verified Partner Badge',
      desc: 'Get audited and featured with the GearX Certified Workshop shield.',
      icon: Sparkles
    }
  ];

  return (
    <section id="register-garage-section" className="py-24 lg:py-32 bg-[#05070b] relative overflow-hidden cyber-grid border-t border-white/10">
      {/* Workshop Glow Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#00e5ff]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Wrench className="w-4 h-4" />
            <span>Workshop & Garage Network Expansion</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Own a Garage or Workshop? <br />
            <span className="bg-gradient-to-r from-amber-400 via-[#00e5ff] to-[#00e676] bg-clip-text text-transparent">
              Register Your Garage on GearX
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
          >
            Garages are currently being vetted and listed on GearX. Join our certified multi-brand network to receive advance bookings, digital job cards, and direct customer dispatches.
          </motion.p>
        </div>

        {/* Two-Column Section: Left Perks, Right Interactive Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Why Garage Owners Choose GearX */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Why Register Your Garage With Us?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                GearX bridges the trust gap between vehicle owners and local workshops through technology and verified quality standards.
              </p>

              <div className="space-y-4">
                {perks.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">{p.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Onboarding Support Helpline Box */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#00e5ff]" />
                  <span>Workshop Onboarding Desk:</span>
                </div>
                <span className="text-white font-mono font-semibold">+91 98765 43210</span>
              </div>
            </div>

            {/* Direct Link to Full Multi-Step Form */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <p className="text-xs text-gray-400 mb-2">Need a detailed registration with license upload?</p>
              <Link 
                to="/register-business?type=garage"
                className="text-xs font-semibold text-[#00e5ff] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Go to Full Business Onboarding Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Fast-Track Garage Registration Card */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-amber-500/30 shadow-[0_0_50px_-15px_rgba(245,158,11,0.2)] relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                      Garage Owner Registration Form
                    </h3>
                    <p className="text-xs text-gray-400">Apply for GearX certified workshop listing</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Phase 2 Onboarding
                </span>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#00e676]/20 border border-[#00e676]/40 text-[#00e676] flex items-center justify-center mx-auto mb-5 shadow-[0_0_25px_rgba(0,230,118,0.25)]">
                    <Check className="w-8 h-8" />
                  </div>

                  <h4 className="text-2xl font-heading font-bold text-white mb-2">
                    Garage Application Submitted!
                  </h4>

                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.ownerName}</span>. Your workshop <span className="text-white font-semibold">"{formData.garageName}"</span> in <span className="text-[#00e5ff] font-semibold">{formData.city}</span> has been received for 40-point verification.
                  </p>

                  <div className="inline-block p-4 rounded-xl bg-white/[0.04] border border-white/10 text-left text-xs font-mono mb-8 max-w-sm w-full space-y-1.5">
                    <div className="text-gray-400">Application Ref: <span className="text-[#00e5ff] font-bold">GX-GARAGE-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                    <div className="text-gray-400">Capacity: <span className="text-white">{formData.bays}</span></div>
                    <div className="text-gray-400">Status: <span className="text-amber-400">Under Quality Audit</span></div>
                  </div>

                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                    >
                      Register Another Workshop
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Garage Name & Owner Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-medium text-gray-400 mb-1.5">
                        Garage / Workshop Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Auto Precision"
                        value={formData.garageName}
                        onChange={(e) => setFormData({...formData, garageName: e.target.value})}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium text-gray-400 mb-1.5">
                        Owner / Manager Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Phone Number & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-medium text-gray-400 mb-1.5">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium text-gray-400 mb-1.5">
                        City / Metro Location *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full bg-[#0d111a] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        {cities.map(c => (
                          <option key={c} value={c} className="bg-[#0d111a] text-white">{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Service Bay Capacity */}
                  <div>
                    <label className="block text-xs uppercase font-medium text-gray-400 mb-1.5">
                      Workshop Lift / Service Bay Capacity
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {bayOptions.map(option => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({...formData, bays: option})}
                          className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                            formData.bays === option
                              ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-semibold shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                              : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services Offered Checkboxes */}
                  <div>
                    <label className="block text-xs uppercase font-medium text-gray-400 mb-2">
                      Services Provided (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableServices.map(srv => {
                        const isChecked = formData.services.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => handleServiceToggle(srv)}
                            className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                              isChecked
                                ? 'bg-[#00e5ff]/15 border-[#00e5ff] text-white'
                                : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded flex items-center justify-center border text-[10px] ${
                              isChecked 
                                ? 'bg-[#00e5ff] border-[#00e5ff] text-[#07090e]' 
                                : 'border-gray-500'
                            }`}>
                              {isChecked && '✓'}
                            </span>
                            <span className="truncate">{srv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-[#00e5ff] text-[#07090e] font-heading font-extrabold text-base shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <Building2 className="w-5 h-5" />
                      <span>Register My Garage with GearX</span>
                    </button>
                    <p className="text-center text-[11px] text-gray-500 mt-2.5">
                      By submitting, you agree to GearX partner onboarding verification. We will contact you within 24 hours.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default GarageRegistrationCTA;
