import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  { 
    id: '01', 
    title: 'Choose a Service', 
    desc: 'Select from nearby workshop care, doorstep servicing, deep cleaning, or EV charging.', 
    icon: Search,
    detail: 'Car, Bike, or EV modes'
  },
  { 
    id: '02', 
    title: 'Find Nearby Providers', 
    desc: 'Browse verified service hubs, mobile fleet vans, and live EV plugs in your area.', 
    icon: MapPin,
    detail: 'Garages onboarding in progress'
  },
  { 
    id: '03', 
    title: 'Book a Service', 
    desc: 'Lock in your preferred date and time slot with instant digital confirmation.', 
    icon: Calendar,
    detail: 'Transparent upfront estimates'
  },
  { 
    id: '04', 
    title: 'Get Your Vehicle Sorted', 
    desc: 'Track repair milestones in real time. Pay digitally once work is completed to perfection.', 
    icon: CheckCircle2,
    detail: 'Quality warranty guaranteed'
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#07090e] relative overflow-hidden cyber-grid">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          badge="Effortless Flow" 
          title="How GearX Works" 
          subtitle="Four straightforward steps from booking to driving off with confidence."
          align="center"
        />

        <div className="mt-20 relative">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#00e5ff]/40 transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-2"
                >
                  {/* Step Number & Icon Disc */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-[#0d111a] border-2 border-white/15 group-hover:border-[#00e5ff] flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]">
                      <IconComp className="w-8 h-8 text-gray-300 group-hover:text-[#00e5ff] transition-colors" />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 px-2.5 py-0.5 rounded-md bg-[#00e5ff] text-[#07090e] font-mono font-bold text-xs shadow-md">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {step.desc}
                  </p>

                  <span className="text-[11px] font-mono text-[#00e5ff] bg-[#00e5ff]/10 px-3 py-1 rounded-full border border-[#00e5ff]/20">
                    {step.detail}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
