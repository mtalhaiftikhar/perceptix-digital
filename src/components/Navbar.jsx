import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ openModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/offers', label: 'Offers & Pricing' },
    { path: '/faq', label: 'FAQ' },
    { path: '/blog', label: 'Insights & Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-colors">
      <div className="container-custom py-3 sm:py-3.5 flex items-center justify-between gap-4">
        
        {/* Official Brand Logo - Prominent & Fully Responsive */}
        <Link 
          to="/"
          className="flex items-center shrink-0 group text-left"
        >
          <img 
            src="/perceptix_logo.png" 
            alt="Perceptix Digital Official Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[190px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-none object-contain transition-transform group-hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'text-[#00BBA7] bg-[#00BBA7]/10'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button - Capsule Pill Circle with Embedded Circle Target */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => openModal()}
            className="btn-primary group"
          >
            <span>View Offers</span>
            <span className="btn-circle-icon">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none shrink-0"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                location.pathname === link.path
                  ? 'bg-[#00BBA7]/10 text-[#00BBA7]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="btn-primary w-full justify-between"
            >
              <span>View Offers</span>
              <span className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
