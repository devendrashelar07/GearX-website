import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Car, 
  Bike, 
  Sparkles, 
  Activity, 
  CheckCircle2 
} from 'lucide-react';

const Hero = () => {
  const [activeVehicle, setActiveVehicle] = useState('car');

  const vehicleModes = [
    { id: 'car', label: 'Cars', icon: Car, stat: '4-Wheel Smart Care' },
    { id: 'bike', label: 'Bikes & Scooters', icon: Bike, stat: 'Performance Tuning' },
    { id: 'ev', label: 'Electric Vehicles (EV)', icon: Zap, stat: 'Battery & Charger Sync' }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-32 cyber-grid">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#00e676]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00e5ff]/30 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-200">
                GearX <span className="text-gray-500 mx-1">|</span> <span className="text-[#00e5ff] font-semibold">Your Vehicle. Our Gear.</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Everything Your Vehicle Needs. <br />
              <span className="gradient-text-cyan">In One Place.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Find trusted garages, book home servicing, discover washing centres, and access EV charging points — all through GearX.
            </p>

            {/* Vehicle Mode Selector Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-8">
              <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider mr-1 hidden sm:inline-block">
                Select Platform:
              </span>
              {vehicleModes.map((mode) => {
                const IconComponent = mode.icon;
                const isSelected = activeVehicle === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveVehicle(mode.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#00e5ff]/15 border-[#00e5ff] text-white shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                        : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#00e5ff]' : 'text-gray-400'}`} />
                    {mode.label}
                  </button>
                );
              })}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] text-[#07090e] font-heading font-bold text-base shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.55)] hover:brightness-110 transition-all duration-300 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <Link
                to="/register-business"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#00e5ff]/40 text-white font-heading font-semibold text-base transition-all duration-300"
              >
                Join GearX
                <span className="text-xs px-2 py-0.5 rounded bg-[#00e5ff]/20 text-[#00e5ff] font-mono">For Partners</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                <span>Multi-Brand Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00e676]" />
                <span>Transparent Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Doorstep & Station Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual 3D-Style Futuristic Automotive Centerpiece */}
          <motion.div 
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Cyber Visual Container */}
            <div className="w-full max-w-[540px] relative">
              {/* Backlight halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00e5ff]/20 via-[#00e676]/10 to-transparent blur-3xl rounded-3xl -z-10" />

              {/* Holographic Card Stage */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00e676] animate-pulse" />
                    <span className="text-gray-300 font-semibold uppercase tracking-wider">GEARX OS v2.4</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#00e5ff]">
                    <Activity className="w-3.5 h-3.5 animate-spin" />
                    <span>DIAGNOSTICS: OPTIMAL</span>
                  </div>
                </div>

                {/* Futuristic Supercar SVG Illustration */}
                <div className="relative py-4 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 700 360" 
                    className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,229,255,0.25)] transition-transform duration-500 group-hover:scale-[1.02]"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="50%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#090d16" />
                      </linearGradient>
                      <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00e5ff" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                      <linearGradient id="laserGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                      </linearGradient>
                      <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#334155" />
                        <stop offset="70%" stopColor="#090d16" />
                        <stop offset="100%" stopColor="#00e5ff" />
                      </radialGradient>
                    </defs>

                    {/* Ground Reflected Light */}
                    <ellipse cx="350" cy="320" rx="300" ry="25" fill="url(#laserGlow)" opacity="0.35" />

                    {/* Speed / Aerodynamic flow ribbons */}
                    <path d="M40 210 Q 200 170 480 180 T 670 190" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.4" />
                    <path d="M120 140 Q 280 120 520 130 T 680 150" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

                    {/* Car Underbody & Shadow */}
                    <path d="M100 290 L600 290 L580 305 L120 305 Z" fill="#030712" />

                    {/* Main Futuristic Chassis */}
                    <path 
                      d="M90 260 
                         C105 245 130 220 180 200 
                         C220 185 270 145 340 125 
                         C420 105 490 120 550 170 
                         C590 200 625 235 635 265 
                         L620 285 
                         L520 285 
                         C510 250 480 225 440 225 
                         C400 225 370 250 360 285 
                         L260 285 
                         C250 250 220 225 180 225 
                         C140 225 110 250 100 285 
                         L80 280 Z" 
                      fill="url(#bodyGrad)" 
                      stroke="#334155" 
                      strokeWidth="2.5" 
                    />

                    {/* Cabin Glass & Roofline */}
                    <path 
                      d="M260 185 
                         C290 150 335 135 410 135 
                         C470 135 500 155 530 185 
                         L470 190 
                         C420 180 340 180 280 190 Z" 
                      fill="#0284c7" 
                      fillOpacity="0.25" 
                      stroke="#00e5ff" 
                      strokeWidth="2" 
                    />

                    {/* Aerodynamic Body Contour Lines with Neon Cyan Glow */}
                    <path d="M130 230 C 220 215 320 210 570 230" stroke="#00e5ff" strokeWidth="2.5" />
                    <path d="M190 200 C 280 185 380 180 480 190" stroke="#67e8f9" strokeWidth="1.5" opacity="0.8" />
                    <path d="M340 125 C 410 125 470 140 520 175" stroke="#00e5ff" strokeWidth="2" />

                    {/* Headlight & Laser Beam */}
                    <polygon points="620,245 645,255 625,265" fill="#00e5ff" />
                    <path d="M645 255 L 695 240 L 695 280 Z" fill="url(#laserGlow)" opacity="0.8" />

                    {/* Taillight Strip */}
                    <path d="M85 255 L 105 250" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />

                    {/* Front Wheel (Right) */}
                    <g>
                      <circle cx="440" cy="275" r="45" fill="#090d16" stroke="#00e5ff" strokeWidth="3" />
                      <circle cx="440" cy="275" r="32" fill="url(#wheelGrad)" />
                      {/* Alloy Spokes */}
                      <line x1="440" y1="243" x2="440" y2="307" stroke="#94a3b8" strokeWidth="2.5" />
                      <line x1="408" y1="275" x2="472" y2="275" stroke="#94a3b8" strokeWidth="2.5" />
                      <circle cx="440" cy="275" r="10" fill="#00e5ff" />
                      {/* Brake Caliper */}
                      <path d="M430 248 A 30 30 0 0 1 458 255" stroke="#00e676" strokeWidth="4" fill="none" />
                    </g>

                    {/* Rear Wheel (Left) */}
                    <g>
                      <circle cx="180" cy="275" r="45" fill="#090d16" stroke="#00e5ff" strokeWidth="3" />
                      <circle cx="180" cy="275" r="32" fill="url(#wheelGrad)" />
                      {/* Alloy Spokes */}
                      <line x1="180" y1="243" x2="180" y2="307" stroke="#94a3b8" strokeWidth="2.5" />
                      <line x1="148" y1="275" x2="212" y2="275" stroke="#94a3b8" strokeWidth="2.5" />
                      <circle cx="180" cy="275" r="10" fill="#00e5ff" />
                      {/* Brake Caliper */}
                      <path d="M170 248 A 30 30 0 0 1 198 255" stroke="#00e676" strokeWidth="4" fill="none" />
                    </g>
                  </svg>
                </div>

                {/* Live Telemetry / Feature Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
                  <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">Platform</span>
                    <span className="font-semibold text-white">Car / Bike / EV</span>
                  </div>
                  <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">Service Modes</span>
                    <span className="font-semibold text-[#00e5ff]">Doorstep + Hub</span>
                  </div>
                  <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">Verified Techs</span>
                    <span className="font-semibold text-[#00e676]">GearX Shield</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
