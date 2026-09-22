import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cog, ArrowRight, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Find Garage', path: '/find-garage', badge: 'Listing Soon' },
    { name: 'EV Charging', path: '/#ev-charging' },
    { name: 'For Business', path: '/register-business' },
    { name: 'About', path: '/about' },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      if (location.pathname !== '/') {
        navigate(`/#${hash}`);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const isCurrentActive = (path) => {
    if (path.includes('#')) return false;
    return location.pathname === path;
  };

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setMobileMenuOpen(false)}>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00e5ff] to-[#00b8d4] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all">
        <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
          <span className="font-heading font-black text-xl gradient-text-cyan tracking-tighter">GX</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-heading font-extrabold text-xl text-white tracking-tight leading-none group-hover:text-[#00e5ff] transition-colors">
          Gear<span className="text-[#00e5ff]">X</span>
        </span>
        <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase leading-tight">
          Your Vehicle. Our Gear.
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#07090e]/85 backdrop-blur-2xl border-b border-white/10 py-3.5 shadow-2xl' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const active = isCurrentActive(link.path);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      active
                        ? 'text-[#00e5ff] bg-[#00e5ff]/10 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop Action Links */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/dashboard"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
              >
                <LayoutDashboard className="w-4 h-4 text-[#00e5ff]" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-[#07090e] font-heading font-bold text-sm shadow-[0_0_15px_rgba(0,229,255,0.25)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#07090e]/98 backdrop-blur-3xl lg:hidden flex flex-col justify-between"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-3 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="w-full text-left py-3 px-4 rounded-xl text-lg font-heading font-semibold text-gray-200 hover:text-[#00e5ff] hover:bg-white/5 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  {link.badge ? (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {link.badge}
                    </span>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-left py-3 px-4 rounded-xl text-lg font-heading font-semibold text-gray-200 hover:text-[#00e5ff] hover:bg-white/5 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5 text-[#00e5ff]" />
                    Customer Dashboard
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </Link>
              </div>
            </div>

            <div className="p-6 border-t border-white/10 bg-[#0d111a]">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block py-3.5 rounded-xl text-center bg-[#00e5ff] text-[#07090e] font-heading font-bold text-base shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
