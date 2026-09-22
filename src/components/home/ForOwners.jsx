import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Eye, 
  Home, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Search,
    title: 'Quick Service Discovery',
    desc: 'Find the exact service your car, bike, or EV requires in seconds with intuitive multi-tier filters.'
  },
  {
    icon: MapPin,
    title: 'Nearby Service Providers',
    desc: 'Connect with verified mechanics, detailing studios, and charging points closest to your coordinates.'
  },
  {
    icon: Calendar,
    title: 'Easy Digital Booking',
    desc: 'Book verified time slots without endless phone calls. Receive instant SMS and calendar invites.'
  },
  {
    icon: Eye,
    title: 'Transparent Information',
    desc: 'Pre-approved rate cards, upfront estimates, and verified customer reviews. Zero bait-and-switch.'
  },
  {
    icon: Home,
    title: 'Doorstep Servicing',
    desc: 'Professional mechanics arrive at your home or workplace equipped with certified diagnostic kits.'
  },
  {
    icon: Zap,
    title: 'EV Charging Access',
    desc: 'Locate live plugs, view kilowatt speeds, and reserve charging bays with turnkey convenience.'
  }
];

const ForOwners = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#090d15] relative overflow-hidden">
      {/* Subtle Cyan Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          badge="Built For Drivers" 
          title="Vehicle Ownership, Elevated" 
          subtitle="Stop juggling disconnected mechanics, towing services, and car washes. GearX puts your entire garage in your pocket."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 mb-16">
          {benefits.map((b, index) => {
            const IconComponent = b.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-7 rounded-2xl border border-white/10 hover:border-[#00e5ff]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-heading font-bold text-white mb-2.5">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Central Owner CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-[#00e5ff]/30 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00e5ff]/10 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            Ready to Upgrade Your Vehicle Experience?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Experience guaranteed parts, verified technicians, and hassle-free vehicle maintenance designed for 2024 and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-[#07090e] font-heading font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started with GearX</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/find-garage"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-heading font-semibold text-sm transition-all text-center"
            >
              Explore Garage Directory Status
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ForOwners;
