import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import HowItWorks from '../components/home/HowItWorks';
import ForOwners from '../components/home/ForOwners';
import ForProviders from '../components/home/ForProviders';
import EVCharging from '../components/home/EVCharging';
import Stats from '../components/home/Stats';
import GarageRegistrationCTA from '../components/home/GarageRegistrationCTA';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090e]">
      <Hero />
      <Services />
      <HowItWorks />
      <ForOwners />
      <ForProviders />
      <EVCharging />
      <Stats />
      {/* Dedicated Option for Registration of Garages by Garage Owners */}
      <GarageRegistrationCTA />
    </div>
  );
};

export default Home;
