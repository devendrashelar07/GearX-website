import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Droplets, Home, Zap, CheckCircle, Upload, Briefcase } from 'lucide-react';
import { Button, Card, Input, Select, SectionHeading } from '../components/ui';
import { useSearchParams } from 'react-router-dom';

const BusinessRegister = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'garage';
  const [businessType, setBusinessType] = useState(initialType);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setBusinessType(type);
    }
  }, [searchParams]);
  
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    address: '',
    city: 'mumbai',
    services: '',
    hoursFrom: '09:00',
    hoursTo: '18:00',
    pricing: ''
  });

  const [errors, setErrors] = useState({});

  const businessTypes = [
    { id: 'garage', label: 'Garage', icon: <Wrench className="w-6 h-6" /> },
    { id: 'washing', label: 'Washing Centre', icon: <Droplets className="w-6 h-6" /> },
    { id: 'home', label: 'Home Service', icon: <Home className="w-6 h-6" /> },
    { id: 'ev', label: 'EV Charging', icon: <Zap className="w-6 h-6" /> }
  ];

  const cities = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'pune', label: 'Pune' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'chennai', label: 'Chennai' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.businessName) newErrors.businessName = 'Business name is required';
    if (!formData.ownerName) newErrors.ownerName = 'Owner name is required';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit phone number is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
      // API call would go here
    }
  };

  const benefits = [
    "Get discovered by vehicle owners in your city",
    "Manage bookings easily through our dashboard",
    "Build your online reputation with verified workshop credentials",
    "Grow your customer base organically",
    "Free to register with no hidden charges",
    "Analytics dashboard to track your performance (coming soon)"
  ];

  return (
    <div className="min-h-screen pt-16 bg-dark-900 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-dark-800 border-b border-white/5 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Register Your Business on GearX
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join the fastest-growing automotive service ecosystem and accelerate your business growth today.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <Card className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white mb-4">Registration Submitted!</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md">
                  Thank you for registering with GearX. Our team will review your application and contact you within 24-48 hours.
                </p>
                <Button variant="primary" onClick={() => setIsSubmitted(false)}>Submit Another Business</Button>
              </Card>
            ) : (
              <Card className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Business Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Select Business Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {businessTypes.map((type) => (
                        <div
                          key={type.id}
                          onClick={() => setBusinessType(type.id)}
                          className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center text-center transition-all ${
                            businessType === type.id
                              ? 'border-accent bg-accent/10 text-accent'
                              : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <div className="mb-2">{type.icon}</div>
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Business / Garage Name"
                      name="businessName"
                      placeholder="e.g. Metro Auto Works"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      error={errors.businessName}
                    />
                    <Input
                      label="Owner Full Name"
                      name="ownerName"
                      placeholder="e.g. John Doe"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      error={errors.ownerName}
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="e.g. info@business.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                    />
                  </div>

                  <div>
                    <Input
                      label="Complete Address"
                      name="address"
                      placeholder="Shop No, Street, Landmark"
                      value={formData.address}
                      onChange={handleInputChange}
                      error={errors.address}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="City"
                      name="city"
                      options={cities}
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    <Input
                      label="Services Offered (comma separated)"
                      name="services"
                      placeholder="e.g. Repair, Washing, Oil Change"
                      value={formData.services}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                      label="Opening Time"
                      name="hoursFrom"
                      type="time"
                      value={formData.hoursFrom}
                      onChange={handleInputChange}
                    />
                    <Input
                      label="Closing Time"
                      name="hoursTo"
                      type="time"
                      value={formData.hoursTo}
                      onChange={handleInputChange}
                    />
                    <Input
                      label="Pricing Range"
                      name="pricing"
                      placeholder="e.g. ₹500 - ₹5000"
                      value={formData.pricing}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Image Upload Area */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Upload Business Image</label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400 hover:border-accent/50 hover:bg-white/5 transition-colors cursor-pointer bg-dark-800/50">
                      <Upload className="w-8 h-8 mb-3 text-gray-500" />
                      <p className="text-sm font-medium text-white mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Button type="submit" variant="primary" className="w-full py-4 text-lg">
                      Register Business
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                      By registering, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              </Card>
            )}
          </div>

          {/* Right Column: Benefits */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl">
                <Briefcase className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-heading font-bold text-white mb-2">Why Join GearX?</h3>
                <p className="text-sm text-gray-400 mb-6">
                  Partner with us and take your automotive business to the next level with our digital platform.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
                <h4 className="text-white font-medium mb-2">Need help registering?</h4>
                <p className="text-sm text-gray-400 mb-4">Our support team is available 24/7 to assist you with the onboarding process.</p>
                <Button variant="outline" className="w-full">Contact Support</Button>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessRegister;
