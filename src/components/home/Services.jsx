import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Home, 
  Droplets, 
  Zap, 
  Check, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  X, 
  Calendar, 
  MapPin, 
  Shield 
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [bookingStep, setBookingStep] = useState('form');
  const [modalForm, setModalForm] = useState({
    name: '',
    phone: '',
    vehicle: 'Car',
    address: ''
  });

  const handleOpenModal = (serviceType) => {
    setActiveModal(serviceType);
    setBookingStep('form');
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setBookingStep('confirmed');
  };

  const servicesData = [
    {
      id: 1,
      title: 'Nearby Garages',
      badge: 'Garages are yet to be listed',
      badgeType: 'status',
      icon: Wrench,
      desc: 'Find registered garages based on your location. View services, ratings, and availability.',
      notice: 'Garages are yet to be listed while we conduct quality audits and onboard verified workshops.',
      features: [
        'Multi-point inspection audit',
        'Certified mechanics onboarding',
        'Transparent labor rates'
      ],
      btnText: 'Garages are yet to be listed',
      btnSubtext: 'View Onboarding Status',
      isPrimary: false,
      isPending: true,
      link: '/find-garage'
    },
    {
      id: 2,
      title: 'Home Servicing',
      badge: 'Doorstep Available',
      badgeType: 'active',
      icon: Home,
      desc: 'Get vehicle servicing at your doorstep. Professional mechanics come to you with genuine tools.',
      notice: null,
      features: [
        'Oil & filter changes at home',
        'Brake & electrical health check',
        'Zero travel required for you'
      ],
      btnText: 'Book Service',
      btnSubtext: 'Instant Slot Booking',
      isPrimary: true,
      isPending: false,
      action: () => handleOpenModal('Home Servicing')
    },
    {
      id: 3,
      title: 'Vehicle Washing',
      badge: 'Eco & Deep Clean',
      badgeType: 'active',
      icon: Droplets,
      desc: 'Discover nearby washing centres. Pressure wash, foam baths, and interior detailing.',
      notice: null,
      features: [
        'High-pressure snow foam wash',
        'Interior vacuum & sanitization',
        'Ceramic shine & underbody care'
      ],
      btnText: 'Find Washing Centre',
      btnSubtext: 'View Centres & Packages',
      isPrimary: false,
      isPending: false,
      action: () => handleOpenModal('Vehicle Washing')
    },
    {
      id: 4,
      title: 'EV Charging',
      badge: 'Fast & Standard Grid',
      badgeType: 'ev',
      icon: Zap,
      desc: 'Find and book available EV charging points. Private charging-point owners can register and earn.',
      notice: null,
      features: [
        'Live connector slot locator',
        'CCS2 & Type-2 compatible',
        'Earn with your private charger'
      ],
      btnText: 'Find Charging',
      btnSubtext: 'Locate & Book Stations',
      isPrimary: false,
      isPending: false,
      link: '#ev-charging'
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#090d15] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00e676]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          badge="End-to-End Care" 
          title="Engineered Automotive Services" 
          subtitle="Everything your car, bike, or EV requires — unified in a seamless digital experience."
          align="center"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 sm:p-7 flex flex-col justify-between relative rounded-2xl transition-all duration-300 group hover:-translate-y-2 ${
                  service.isPending 
                    ? 'border-amber-500/25 hover:border-amber-400/50' 
                    : service.badgeType === 'ev'
                    ? 'hover:border-[#00e676]/40 hover:shadow-[0_10px_30px_-10px_rgba(0,230,118,0.2)]'
                    : 'hover:border-[#00e5ff]/40 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.2)]'
                }`}
              >
                <div>
                  {/* Top Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      service.badgeType === 'ev' 
                        ? 'bg-[#00e676]/15 text-[#00e676]' 
                        : service.isPending
                        ? 'bg-amber-500/15 text-amber-400'
                        : 'bg-[#00e5ff]/15 text-[#00e5ff]'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      service.isPending 
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' 
                        : service.badgeType === 'ev'
                        ? 'bg-[#00e676]/10 border-[#00e676]/30 text-[#00e676]'
                        : 'bg-[#00e5ff]/10 border-[#00e5ff]/30 text-[#00e5ff]'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-heading font-bold text-white mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Special Notice for Garages to be listed */}
                  {service.notice && (
                    <div className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-normal flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{service.notice}</span>
                    </div>
                  )}

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          service.badgeType === 'ev' 
                            ? 'text-[#00e676]' 
                            : service.isPending 
                            ? 'text-amber-400' 
                            : 'text-[#00e5ff]'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  {service.link ? (
                    <Link
                      to={service.link}
                      className={`w-full block py-3 px-4 rounded-xl text-center font-heading font-semibold text-sm transition-all duration-300 ${
                        service.isPending
                          ? 'bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300'
                          : service.badgeType === 'ev'
                          ? 'bg-[#00e676] text-[#07090e] hover:bg-[#00e676]/90 shadow-[0_0_15px_rgba(0,230,118,0.3)]'
                          : 'border border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff]/10'
                      }`}
                    >
                      {service.btnText}
                    </Link>
                  ) : (
                    <button
                      onClick={service.action}
                      className="w-full py-3 px-4 rounded-xl text-center font-heading font-semibold text-sm transition-all duration-300 bg-[#00e5ff] text-[#07090e] hover:bg-[#00e5ff]/90 shadow-[0_0_15px_rgba(0,229,255,0.3)] flex items-center justify-center gap-2"
                    >
                      <span>{service.btnText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Booking Modal for Home Servicing & Washing */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-2xl border border-white/15 relative text-left"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              {bookingStep === 'form' ? (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00e5ff] uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Instant Booking Prototype</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Book {activeModal}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Enter your details to schedule a verified technician or reservation.
                  </p>

                  <form onSubmit={handleModalSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase font-medium text-gray-400 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Alex Kumar"
                        value={modalForm.name}
                        onChange={(e) => setModalForm({...modalForm, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-medium text-gray-400 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 98765 43210"
                          value={modalForm.phone}
                          onChange={(e) => setModalForm({...modalForm, phone: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase font-medium text-gray-400 mb-1">Vehicle Type</label>
                        <select 
                          value={modalForm.vehicle}
                          onChange={(e) => setModalForm({...modalForm, vehicle: e.target.value})}
                          className="w-full bg-[#0d111a] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff]"
                        >
                          <option value="Car">Car</option>
                          <option value="Bike">Bike / Scooter</option>
                          <option value="EV">Electric Vehicle (EV)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium text-gray-400 mb-1">Service Address / Location</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Street, Landmark, City"
                        value={modalForm.address}
                        onChange={(e) => setModalForm({...modalForm, address: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00e5ff]"
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] text-[#07090e] font-heading font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:brightness-110 transition-all"
                      >
                        Confirm Booking Request
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-[#00e676]/20 border border-[#00e676]/40 flex items-center justify-center mx-auto mb-4 text-[#00e676]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white mb-2">Booking Scheduled!</h4>
                  <p className="text-gray-300 text-sm max-w-sm mx-auto mb-6">
                    Your {activeModal} request for {modalForm.vehicle} has been registered. Reference: <span className="text-[#00e5ff] font-mono">GX-BK-{Math.floor(100000 + Math.random() * 900000)}</span>.
                  </p>
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
