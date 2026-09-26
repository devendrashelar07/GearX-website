import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, Globe, Wrench, Home, Droplets, Zap, ArrowRight } from 'lucide-react';
import { Button, Card, SectionHeading } from '../components/ui';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: 'Innovation',
      description: 'We constantly strive to bring the latest technology to the traditional automotive service industry, making it more efficient and user-friendly.'
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Trust & Transparency',
      description: 'We build trust through transparent pricing, verified partner standards, and guaranteed service quality from our network of partners.'
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: 'Accessibility',
      description: 'Whether you need a quick wash or emergency EV charging, our platform makes vehicle care accessible anytime, anywhere.'
    }
  ];

  const pillars = [
    { icon: <Wrench className="w-6 h-6 text-white" />, title: 'Garage Network', desc: 'Connect with top-rated mechanics and service centers.' },
    { icon: <Home className="w-6 h-6 text-white" />, title: 'Home Services', desc: 'Get professional vehicle care right at your doorstep.' },
    { icon: <Droplets className="w-6 h-6 text-white" />, title: 'Washing Centers', desc: 'Find the best automated and manual car wash facilities.' },
    { icon: <Zap className="w-6 h-6 text-white" />, title: 'EV Charging', desc: 'Locate and book available charging slots seamlessly.' }
  ];

  return (
    <div className="min-h-screen pt-16 bg-dark-900">
      {/* Hero Section */}
      <section className="py-20 bg-dark-800 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              About GearX
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionizing the automotive service industry by bridging the gap between vehicle owners and trusted service providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 md:p-12 border-accent/20 bg-gradient-to-b from-dark-800 to-dark-900">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
              "GearX is a technology-driven automotive service ecosystem connecting vehicle owners with trusted automotive service providers. We bring garages, home servicing, vehicle washing, and EV charging into one seamless platform."
            </p>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Core Values" subtitle="The principles that drive us forward every day." centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-8 h-full text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What We Do" subtitle="A comprehensive ecosystem for all your vehicle needs." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pillars.map((pillar, idx) => (
              <Card key={idx} className="p-6 bg-dark-800/50">
                <div className="w-12 h-12 bg-dark-700 rounded-xl flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-gray-400">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-400 mb-10">
            Join vehicle owners and businesses on the GearX platform today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                For Vehicle Owners <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/register-business">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                For Businesses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
