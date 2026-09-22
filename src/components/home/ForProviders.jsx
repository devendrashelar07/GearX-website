import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  CheckCircle2, 
  TrendingUp, 
  CalendarClock, 
  Users, 
  CreditCard, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

const providerFeatures = [
  { title: 'Register your business', desc: 'Fast onboarding for garages, detailers, mobile mechanics, and EV hosts.' },
  { title: 'Get discovered by nearby customers', desc: 'Pin your facility on the GearX map to capture high-intent vehicle owners.' },
  { title: 'Manage service requests', desc: 'Accept, schedule, or update customer job orders in a single unified portal.' },
  { title: 'Manage bay availability', desc: 'Set working hours, mechanic availability, and lift slots to prevent crowding.' },
  { title: 'Build your customer base', desc: 'Collect verified reviews, build repeat loyalists, and offer recurring care plans.' },
  { title: 'Receive instant digital bookings', desc: 'Guaranteed customer deposits, advance booking notifications, and fast payouts.' }
];

const ForProviders = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#07090e] relative overflow-hidden cyber-grid">
      {/* Cyan Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Checklist */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              <span>For Garages, Detailers & EV Hosts</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
              Grow Your Automotive Business with GearX
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
              Join India's premier automotive service network. Whether you operate a multi-bay workshop, an eco washing studio, a doorstep mobile van, or an EV charger — GearX delivers steady customer demand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {providerFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/register-business"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] text-[#07090e] font-heading font-bold text-base shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] hover:brightness-110 transition-all duration-300 group"
            >
              <span>Register Your Business</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column: High-End Provider Dashboard Telemetry Mockup */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00e5ff]/20 text-[#00e5ff] flex items-center justify-center font-bold font-mono text-sm">
                    GX
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Apex Autoworks & EV Hub</h4>
                    <span className="text-[11px] text-[#00e676] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] inline-block" />
                      Verified Workshop Partner
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                  LIVE PORTAL
                </span>
              </div>

              {/* Stat Gauges */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Weekly Bookings</span>
                  <span className="text-xl font-heading font-extrabold text-white">38 Orders</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Customer Rating</span>
                  <span className="text-xl font-heading font-extrabold text-amber-400">4.9 ★</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Net Revenue</span>
                  <span className="text-xl font-heading font-extrabold text-[#00e676]">₹1.42L</span>
                </div>
              </div>

              {/* Incoming Orders Stream */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-mono tracking-wider text-gray-400 block mb-2">
                  Incoming Customer Dispatches
                </span>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-white">BMW 330i • Full Synthetic Oil Service</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#00e5ff]/15 text-[#00e5ff] font-mono">11:00 AM</span>
                    </div>
                    <span className="text-[11px] text-gray-400">Bay #2 Allocated • Part Pack In Stock</span>
                  </div>
                  <span className="text-xs font-bold text-white font-mono">₹7,800</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-white">Tata Nexon EV • 60 kW Fast Charge Bay</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#00e676]/15 text-[#00e676] font-mono">11:30 AM</span>
                    </div>
                    <span className="text-[11px] text-gray-400">Charger Port B • Pre-Authorized QR</span>
                  </div>
                  <span className="text-xs font-bold text-[#00e676] font-mono">₹450</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Direct bank settlement every 48 hours</span>
                <span className="text-[#00e5ff]">GearX Partner App iOS / Android</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ForProviders;
