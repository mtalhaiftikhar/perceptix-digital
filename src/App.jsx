import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OfferModal from './components/OfferModal';
import SEOManager from './components/SEOManager';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Offers from './pages/Offers';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

// Helper component to auto-scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(''); // Default: Please Select a Service or Scope...

  const openOfferModal = (offerId = '') => {
    setSelectedOffer(offerId);
    setModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <SEOManager />
      <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#00BBA7] selection:text-white">
        
        {/* Navigation Header */}
        <Navbar openModal={openOfferModal} />

        {/* Main Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openModal={openOfferModal} />} />
            <Route path="/about" element={<About openModal={openOfferModal} />} />
            <Route path="/services" element={<Services openModal={openOfferModal} />} />
            <Route path="/offers" element={<Offers openModal={openOfferModal} />} />
            <Route path="/faq" element={<FAQ openModal={openOfferModal} />} />
            <Route path="/blog" element={<Blog openModal={openOfferModal} />} />
            <Route path="/contact" element={<Contact openModal={openOfferModal} />} />
            <Route path="/legal" element={<Legal />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home openModal={openOfferModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer openModal={openOfferModal} />

        {/* Global Offer Inquiry Modal */}
        <OfferModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          selectedPackage={selectedOffer}
        />

      </div>
    </Router>
  );
}
