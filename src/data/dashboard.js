export const dashboardData = {
  upcomingBookings: [
    {
      id: 'BKG-001',
      garageName: 'AutoCare Max Mumbai',
      service: 'General Service',
      date: 'Oct 25, 2026',
      time: '10:00 AM',
      status: 'Confirmed',
      vehicleType: 'Car'
    },
    {
      id: 'BKG-002',
      garageName: 'Speedy Wheels Bangalore',
      service: 'Wheel Alignment',
      date: 'Oct 28, 2026',
      time: '2:30 PM',
      status: 'Pending',
      vehicleType: 'Car'
    }
  ],
  recentServices: [
    {
      id: 'SRV-101',
      garageName: 'Pune Pro Mechanics',
      service: 'Brake Repair',
      date: 'Sep 15, 2026',
      amount: '₹3,200',
      status: 'Completed',
      rating: 5
    },
    {
      id: 'SRV-102',
      garageName: 'Delhi Auto Hub',
      service: 'AC Service',
      date: 'Aug 02, 2026',
      amount: '₹1,500',
      status: 'Completed',
      rating: 4
    },
    {
      id: 'SRV-103',
      garageName: 'Ahmedabad MotoWorks',
      service: 'Oil Change',
      date: 'Jun 20, 2026',
      amount: '₹800',
      status: 'Completed',
      rating: 4
    },
    {
      id: 'SRV-104',
      garageName: 'Hyderabad Green EV Works',
      service: 'Battery Check',
      date: 'Apr 10, 2026',
      amount: '₹500',
      status: 'Completed',
      rating: 5
    }
  ],
  nearbyGarages: [
    {
      name: 'AutoCare Max',
      distance: '2.3 km',
      rating: 4.8,
      servicesCount: 5
    },
    {
      name: 'Speedy Wheels',
      distance: '3.1 km',
      rating: 4.5,
      servicesCount: 3
    },
    {
      name: 'Pune Pro',
      distance: '1.8 km',
      rating: 4.9,
      servicesCount: 3
    }
  ],
  evChargingPoints: [
    {
      name: 'ChargeZone Mumbai',
      distance: '1.2 km',
      availableSlots: 2,
      ratePerKwh: '₹18',
      type: 'Fast'
    },
    {
      name: 'Tata Power EZ',
      distance: '2.5 km',
      availableSlots: 0,
      ratePerKwh: '₹15',
      type: 'Standard'
    },
    {
      name: 'Zeon Charging',
      distance: '3.8 km',
      availableSlots: 4,
      ratePerKwh: '₹20',
      type: 'Fast'
    }
  ],
  stats: {
    totalBookings: 12,
    upcomingBookings: 2,
    favoriteGarages: 4,
    totalSpent: '₹15,400'
  }
};
