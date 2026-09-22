import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, MapPin, Zap, ShieldCheck } from 'lucide-react';

const statsData = [
  {
    number: '10,000+',
    label: 'Vehicle Owners Supported',
    sub: 'Cars, Bikes & EVs active',
    icon: Users,
    color: 'text-[#00e5ff]'
  },
  {
    number: '500+',
    label: 'Partner Providers in Pipeline',
    sub: 'Undergoing 40-point audit',
    icon: Building2,
    color: 'text-amber-400'
  },
  {
    number: '50+',
    label: 'Tier-1 & Tier-2 Cities',
    sub: 'Pan-India expansion roadmap',
    icon: MapPin,
    color: 'text-[#00e5ff]'
  },
  {
    number: '200+',
    label: 'EV Charging Connectors',
    sub: 'DC Fast & AC Type-2 network',
    icon: Zap,
    color: 'text-[#00e676]'
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-[#0d111a] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center sm:text-left flex items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
