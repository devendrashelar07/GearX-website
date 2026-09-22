import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicy = () => (
  <div className="min-h-screen pt-24 pb-20 bg-[#07090e] cyber-grid">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10">
        <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center mb-6">
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last Updated: September 2024</p>
        
        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <p>
            GearX ("we", "our", or "us") respects your privacy and is dedicated to protecting personal information collected through our automotive service discovery platform.
          </p>
          <h3 className="text-lg font-bold text-white">1. Information We Collect</h3>
          <p>
            We collect information provided directly by users, including contact details, vehicle make/model/registration, and preferred service location to facilitate bookings.
          </p>
          <h3 className="text-lg font-bold text-white">2. Use of Information</h3>
          <p>
            Information is used solely to match vehicle owners with verified workshops, mobile fleet mechanics, washing hubs, and EV charging hosts. We never sell personal data.
          </p>
          <h3 className="text-lg font-bold text-white">3. Security</h3>
          <p>
            We deploy 256-bit encryption on all service requests and user accounts.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

export const TermsOfService = () => (
  <div className="min-h-screen pt-24 pb-20 bg-[#07090e] cyber-grid">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10">
        <div className="w-12 h-12 rounded-2xl bg-[#00e676]/10 text-[#00e676] flex items-center justify-center mb-6">
          <FileText className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-8">Last Updated: September 2024</p>
        
        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <p>
            By accessing or using the GearX platform, you agree to be bound by these Terms of Service.
          </p>
          <h3 className="text-lg font-bold text-white">1. Platform Scope</h3>
          <p>
            GearX provides a digital marketplace connecting vehicle owners with vetted third-party service providers, mobile technicians, and EV host stations.
          </p>
          <h3 className="text-lg font-bold text-white">2. Partner Listings Status</h3>
          <p>
            Certain services, including Nearby Garages, are currently in onboarding phase. Live booking is activated only after workshops pass our 40-point verification audit.
          </p>
          <h3 className="text-lg font-bold text-white">3. Customer Guarantee</h3>
          <p>
            All completed transactions facilitated through GearX are backed by transparent estimates and verified service milestones.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);
