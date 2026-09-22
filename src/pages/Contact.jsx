import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button, Card, Input, Select, SectionHeading } from '../components/ui';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'service', label: 'Service Issue' },
    { value: 'business', label: 'Business Registration' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: 'general', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-dark-900 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-dark-800 border-b border-white/5 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center h-[400px]">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Full Name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Select
                    label="Subject"
                    name="subject"
                    options={subjects}
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" variant="primary" className="w-full py-3">
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Right Column: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                <p className="text-gray-400 mb-2">For general inquiries and support</p>
                <a href="mailto:contact@gearx.in" className="text-accent hover:underline">contact@gearx.in</a>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                <p className="text-gray-400 mb-2">Mon-Sat from 9am to 6pm</p>
                <a href="tel:+919876543210" className="text-accent hover:underline">+91 98765 43210</a>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Visit Us</h3>
                <p className="text-gray-400">
                  GearX Headquarters<br />
                  Andheri East, Mumbai<br />
                  Maharashtra, India 400069
                </p>
              </div>
            </Card>

            {/* Socials */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Follow Us</h3>
              <div className="flex gap-4">
                {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-accent/10 hover:text-accent hover:border-accent transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="w-full h-[300px] sm:h-[400px] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-700 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
              <MapPin className="w-12 h-12 text-accent mb-4 relative z-10" />
              <p className="text-white font-medium text-lg relative z-10">Mumbai, India</p>
              <p className="text-gray-500 text-sm mt-2 relative z-10">Map View (Placeholder)</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
