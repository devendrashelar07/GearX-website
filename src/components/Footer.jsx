import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Linkedin, Building2, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#05070b] border-t border-white/10 relative">
      
      {/* Highlighted Garage Owner Registration Callout Strip in Footer */}
      <div className="bg-gradient-to-r from-amber-500/10 via-[#00e5ff]/10 to-[#00e676]/10 border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-white">
                Are You a Garage or Workshop Owner?
              </h4>
              <p className="text-xs text-gray-400">
                Register your facility to join the GearX certified multi-brand service network.
              </p>
            </div>
          </div>

          <Link
            to="/register-business?type=garage"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#07090e] font-heading font-bold text-xs shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>Register Your Garage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00e5ff] to-[#00b8d4] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-black text-lg gradient-text-cyan tracking-tighter">GX</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight leading-none">
                  Gear<span className="text-[#00e5ff]">X</span>
                </span>
                <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase leading-tight">
                  Your Vehicle. Our Gear.
                </span>
              </div>
            </Link>
            <div>
              <p className="text-gray-300 font-medium mb-2">Your Vehicle. Our Gear.</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                All-in-one automotive technology platform connecting car, bike, and EV owners with verified workshops, mobile fleet mechanics, and smart charging hubs.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00e5ff] transition-colors p-2 rounded-lg bg-white/5">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00e5ff] transition-colors p-2 rounded-lg bg-white/5">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00e5ff] transition-colors p-2 rounded-lg bg-white/5">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00e5ff] transition-colors p-2 rounded-lg bg-white/5">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6">Explore Platform</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Services Grid</Link>
              </li>
              <li>
                <Link to="/find-garage" className="text-gray-400 hover:text-[#00e5ff] transition-colors flex items-center gap-1.5">
                  <span>Find Garage</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300">Listing Soon</span>
                </Link>
              </li>
              <li>
                <Link to="/#ev-charging" className="text-gray-400 hover:text-[#00e5ff] transition-colors">EV Charging Grid</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-[#00e5ff] transition-colors">User Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6">Service Spectrum</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/find-garage" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Nearby Workshop Care</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Doorstep Mobile Servicing</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Snow Foam Vehicle Washing</Link>
              </li>
              <li>
                <Link to="/#ev-charging" className="text-gray-400 hover:text-[#00e5ff] transition-colors">High-Voltage EV Charging</Link>
              </li>
              <li>
                <Link to="/register-business?type=ev" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Host Private Charger</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: For Businesses & Partners */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6">For Business Partners</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/register-business?type=garage" className="text-amber-400 hover:underline font-semibold flex items-center gap-1">
                  <span>Register Your Garage</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">New</span>
                </Link>
              </li>
              <li>
                <Link to="/register-business" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Business Partner Hub</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#00e5ff] transition-colors">About GearX</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-[#00e5ff] transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GearX Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="font-mono text-gray-400">"Your Vehicle. Our Gear."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
