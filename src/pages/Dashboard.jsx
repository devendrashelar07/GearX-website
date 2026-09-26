import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Search, 
  Calendar, 
  Home, 
  Droplets, 
  Zap, 
  User, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Wrench, 
  PlusCircle, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';
import { Button, Card, Badge } from '../components/ui';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'find', label: 'Find Garage', icon: Search, link: '/find-garage' },
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'home', label: 'Home Service', icon: Home },
    { id: 'washing', label: 'Washing', icon: Droplets },
    { id: 'ev', label: 'EV Charging', icon: Zap },
    { id: 'profile', label: 'Vehicle Profile', icon: User },
  ];

  const stats = [
    { label: 'Total Services', value: '12', change: '+2 this quarter', icon: Calendar, color: 'text-[#00e5ff]' },
    { label: 'Upcoming Service', value: '1 Active', change: 'Tomorrow, 10:30 AM', icon: Clock, color: 'text-amber-400' },
    { label: 'Registered Vehicles', value: '2 Cars, 1 EV', change: 'Profile verified', icon: ShieldCheck, color: 'text-[#00e676]' },
    { label: 'Total Saved', value: '₹4,850', change: 'Via GearX transparent rates', icon: Zap, color: 'text-[#00e5ff]' }
  ];

  const upcomingBookings = [
    {
      id: 'GX-BK-9182',
      service: 'Home Service - 30-Point Comprehensive Inspection',
      provider: 'GearX Doorstep Fleet Tech #14',
      vehicle: 'Hyundai Ioniq 5 (EV)',
      date: 'Tomorrow, 24 Sep',
      time: '10:30 AM',
      status: 'Confirmed',
      location: 'Doorstep Residence'
    },
    {
      id: 'GX-BK-4019',
      service: 'Eco Foam Deep Wash & Wax Detail',
      provider: 'AquaGleam Tech Centre',
      vehicle: 'KTM Duke 390',
      date: 'Saturday, 28 Sep',
      time: '04:00 PM',
      status: 'Scheduled',
      location: 'Station Hub'
    }
  ];

  const recentServices = [
    {
      id: 'SRV-1029',
      service: 'Brake Pad Replacement & Fluid Flush',
      category: 'Home Servicing',
      date: '14 Aug 2024',
      vehicle: 'Honda City',
      amount: '₹3,400',
      status: 'Completed'
    },
    {
      id: 'SRV-0982',
      service: 'Full Body Foam Wash + Underbody Shield',
      category: 'Vehicle Washing',
      date: '28 Jul 2024',
      vehicle: 'Hyundai Ioniq 5',
      amount: '₹950',
      status: 'Completed'
    },
    {
      id: 'SRV-0871',
      service: 'Dual-Port DC Fast Charge (45 kWh)',
      category: 'EV Charging',
      date: '10 Jul 2024',
      vehicle: 'Hyundai Ioniq 5',
      amount: '₹720',
      status: 'Completed'
    }
  ];

  const evChargingPoints = [
    { id: 1, name: 'GearX Supercharge Hub - BKC', distance: '1.4 km away', slots: 4, rate: '₹14/kWh', type: '60 kW DC Fast' },
    { id: 2, name: 'EcoVolt Private Charging Spot', distance: '2.8 km away', slots: 1, rate: '₹12/kWh', type: '22 kW AC Type-2' },
    { id: 3, name: 'Metro Green Point Station', distance: '4.2 km away', slots: 6, rate: '₹15/kWh', type: '120 kW Ultra-Fast' }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] flex pt-16">
      
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Modern Dashboard Sidebar */}
      <aside className={`
        fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#0d111a] border-r border-white/10 z-50 transition-transform duration-300 ease-in-out flex flex-col justify-between
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-5 flex-1">
          {/* Header Mobile Close */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <span className="text-lg font-heading font-bold text-white">Dashboard Navigation</span>
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Profile Mini */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00e5ff] to-[#00b8d4] text-[#07090e] font-heading font-extrabold flex items-center justify-center text-base">
              AK
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm font-semibold text-white truncate">Alex Kumar</h4>
              <p className="text-[11px] text-gray-400 truncate">alex.k@gearx-member.in</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isSelected = activeTab === item.id;

              if (item.link) {
                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <IconComp className="w-4 h-4 text-gray-400" />
                    <span>{item.label}</span>
                    <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      Listing
                    </span>
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-[#00e5ff]/15 text-white border border-[#00e5ff]/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#00e5ff]' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/5">
          <Link
            to="/register-business"
            className="block p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00e5ff]/40 transition-colors text-center"
          >
            <span className="text-xs font-semibold text-[#00e5ff] block mb-0.5">Automotive Partner?</span>
            <span className="text-[11px] text-gray-400">Register Your Business →</span>
          </Link>
        </div>
      </aside>

      {/* Main Dashboard Space */}
      <main className="flex-1 w-full max-w-full lg:max-w-[calc(100%-16rem)] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        
        {/* Top Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Vehicle Control Center
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#00e676]/15 text-[#00e676] border border-[#00e676]/30">
                Live Synced
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Manage your bookings, home servicing dispatches, and EV reservations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link
              to="/#services"
              className="px-4 py-2 rounded-xl bg-[#00e5ff] text-[#07090e] font-heading font-bold text-xs sm:text-sm hover:bg-[#00e5ff]/90 transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.25)]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Book New Service</span>
            </Link>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const IconComp = stat.icon;
            return (
              <div key={i} className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-medium text-gray-400">{stat.label}</span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <IconComp className={`w-4 h-4 ${stat.color}`} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[11px] text-gray-400 font-mono">{stat.change}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Left Column (2 Cols): Active Bookings & History */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Upcoming Bookings */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">Upcoming Bookings</h3>
                  <p className="text-xs text-gray-400">Scheduled home service & maintenance visits</p>
                </div>
                <Badge variant="info" className="bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 text-xs">
                  {upcomingBookings.length} Active
                </Badge>
              </div>

              <div className="space-y-4">
                {upcomingBookings.map((b) => (
                  <div key={b.id} className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-white/20 transition-colors">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[11px] text-[#00e5ff] font-semibold">{b.id}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-xs text-gray-300 font-medium">{b.vehicle}</span>
                      </div>
                      <h4 className="text-base font-semibold text-white mb-1">{b.service}</h4>
                      <p className="text-xs text-gray-400 mb-2">{b.provider}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gray-400" /> {b.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gray-400" /> {b.time}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gray-400" /> {b.location}</span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#00e676]/15 text-[#00e676] border border-[#00e676]/30">
                        {b.status}
                      </span>
                      <button className="text-xs text-gray-400 hover:text-white underline">
                        Reschedule
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Services Ledger */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 overflow-x-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">Service History</h3>
                  <p className="text-xs text-gray-400">Verified receipts and digital job cards</p>
                </div>
              </div>

              <table className="w-full text-left min-w-[550px]">
                <thead>
                  <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-white/10 pb-3">
                    <th className="pb-3 font-medium">Service Item</th>
                    <th className="pb-3 font-medium">Category</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {recentServices.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.01]">
                      <td className="py-4">
                        <div className="font-semibold text-white">{row.service}</div>
                        <div className="text-xs text-gray-400">{row.vehicle}</div>
                      </td>
                      <td className="py-4 text-gray-300">{row.category}</td>
                      <td className="py-4 text-gray-400">{row.date}</td>
                      <td className="py-4 font-mono font-semibold text-white">{row.amount}</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-[#00e676]/10 text-[#00e676] border border-[#00e676]/25">
                          <CheckCircle className="w-3 h-3" />
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Right Column: Prominent "Garages Are Yet To Be Listed" Widget + EV Hub */}
          <div className="space-y-8">
            
            {/* User-Requested "Nearby Garages" Widget: Garages are yet to be listed */}
            <div className="glass-card p-6 rounded-2xl border-2 border-amber-500/30 relative overflow-hidden bg-gradient-to-b from-amber-500/[0.06] to-transparent">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-heading font-bold text-white">Nearby Garages</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Onboarding
                </span>
              </div>

              {/* Dedicated Announcement Content */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center my-4">
                <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <h4 className="text-base font-heading font-bold text-white mb-1">
                  Garages Are Yet To Be Listed
                </h4>
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  GearX is actively verifying and onboarding registered workshops in your locality. No uninspected garages are displayed.
                </p>
              </div>

              {requestSent ? (
                <div className="p-3.5 rounded-xl bg-[#00e676]/10 border border-[#00e676]/30 text-[#00e676] text-xs text-center flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Your pin request noted! We will notify you once garages open.</span>
                </div>
              ) : (
                <button
                  onClick={() => setRequestSent(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-white font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Garage in My Pincode</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00e5ff]" />
                </button>
              )}

              <div className="mt-4 pt-3 border-t border-white/10 text-center">
                <Link
                  to="/find-garage"
                  className="text-xs text-[#00e5ff] hover:underline inline-flex items-center gap-1"
                >
                  View full garage verification protocol →
                </Link>
              </div>
            </div>

            {/* EV Charging Stations Live Widget */}
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#00e676]" />
                  <h3 className="text-base font-heading font-bold text-white">Live EV Stations</h3>
                </div>
                <span className="text-[10px] font-mono text-[#00e676]">Grid Online</span>
              </div>

              <div className="space-y-3">
                {evChargingPoints.map((station) => (
                  <div key={station.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00e676]/30 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="text-xs font-semibold text-white">{station.name}</h5>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00e676]/15 text-[#00e676]">
                        {station.slots} bays free
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-400" /> {station.distance}</span>
                      <span className="text-white font-mono">{station.rate}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-center">
                <Link
                  to="/register-business"
                  className="text-xs text-[#00e676] hover:underline"
                >
                  + Register your private EV charger & earn
                </Link>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;
