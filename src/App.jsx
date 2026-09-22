import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import GarageFinder from './pages/GarageFinder';
import Dashboard from './pages/Dashboard';
import BusinessRegister from './pages/BusinessRegister';
import About from './pages/About';
import Contact from './pages/Contact';
import { PrivacyPolicy, TermsOfService } from './pages/Legal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-white selection:bg-[#00e5ff] selection:text-[#07090e]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-garage" element={<GarageFinder />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register-business" element={<BusinessRegister />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* Fallback route back to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
