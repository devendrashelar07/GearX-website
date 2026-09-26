import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Wrench, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExplodedCarShowcase = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeHighlight, setActiveHighlight] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const engineeringPillars = [
    {
      title: 'Structural Architecture',
      subtitle: 'Chassis & Subframe Integrity',
      desc: 'Precision inspection of load-bearing chassis, crumple zones, and high-tensile alloy subframes.',
      icon: Layers,
      color: 'text-[#00e5ff]',
      borderColor: 'border-[#00e5ff]/30'
    },
    {
      title: 'Next-Gen Powertrain & EV Battery',
      subtitle: 'High-Voltage Diagnostics',
      desc: 'Cell-level voltage balance, thermal management systems, and inverter drive efficiency checks.',
      icon: Zap,
      color: 'text-[#00e676]',
      borderColor: 'border-[#00e676]/30'
    },
    {
      title: 'Precision Braking & Steering',
      subtitle: 'Hydraulic & Caliper Tuning',
      desc: 'Regenerative braking calibration, disc runout analysis, and electronic power steering alignment.',
      icon: Wrench,
      color: 'text-amber-400',
      borderColor: 'border-amber-400/30'
    },
    {
      title: 'GearX Certified Standards',
      subtitle: 'Multi-Point Partner Protocol',
      desc: 'Every part and assembly inspected by vetted technicians using digital job cards.',
      icon: ShieldCheck,
      color: 'text-[#00e5ff]',
      borderColor: 'border-[#00e5ff]/30'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#05070b] relative overflow-hidden cyber-grid border-y border-white/10">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00e5ff]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#00e676]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Cpu className="w-4 h-4" />
            <span>Exploded Vehicle Architecture</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Every Component Engineered. <br />
            <span className="gradient-text-cyan">Inspected to Perfection.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
          >
            Explore the multi-layer anatomy of modern vehicles. From high-voltage battery modules to high-precision chassis assemblies, GearX partners inspect every critical component.
          </motion.p>
        </div>

        {/* Video Player Showcase with HUD Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Video Cinema Container */}
          <motion.div 
            className="lg:col-span-8 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-2 sm:p-3 rounded-3xl border border-white/15 relative overflow-hidden shadow-[0_0_50px_-10px_rgba(0,229,255,0.25)] group">
              
              {/* Telemetry Status Bar Overlay */}
              <div className="flex items-center justify-between px-4 py-2.5 mb-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-pulse" />
                  <span className="text-white font-semibold tracking-wider">GEARX ANATOMY SCANNER</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#00e676] text-[11px] hidden sm:inline-block">1080P HD EXPLODED VIEW</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-300">AUTO-LOOP ON</span>
                </div>
              </div>

              {/* Video Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/videos/exploded-car.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Subtle Neon Scanline Glow Effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#00e5ff]/5 to-transparent opacity-40" />

                {/* Video Floating Controls Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 opacity-90 transition-opacity">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title={isPlaying ? 'Pause Video' : 'Play Video'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-[#00e5ff]" />}
                    </button>
                    <span className="text-xs font-mono text-gray-300 ml-2 hidden sm:inline-block">
                      Electric Vehicle Structural Breakdown
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <span className="px-2 py-0.5 rounded bg-[#00e5ff]/20 text-[#00e5ff] text-[11px]">
                      3D Detached Anatomy
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Diagnostic Breakdown Cards */}
          <motion.div 
            className="lg:col-span-4 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 px-1">
              Select Assembly To Inspect:
            </div>

            {engineeringPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isSelected = activeHighlight === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveHighlight(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? `bg-white/[0.06] ${pillar.borderColor} shadow-[0_0_20px_rgba(0,229,255,0.15)]`
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ${pillar.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-0.5">{pillar.title}</h4>
                      <span className="text-[11px] text-gray-400 font-mono block mb-1">{pillar.subtitle}</span>
                      <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* Bottom Banner CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
              Need Multi-Point Diagnostic Inspection for Your Vehicle?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Schedule doorstep health checks or book verified workshop service in a few clicks.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/#services"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] text-[#07090e] font-heading font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:brightness-110 transition-all flex items-center gap-2"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExplodedCarShowcase;
