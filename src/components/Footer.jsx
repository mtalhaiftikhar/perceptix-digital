import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Shield } from 'lucide-react';

export default function Footer({ openModal }) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-900 pt-12 sm:pt-16 pb-8 transition-colors">
      <div className="container-custom space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1 & 2: Official Brand Logo & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              to="/"
              className="flex items-center text-left group shrink-0"
            >
              <img 
                src="/perceptix_logo.png" 
                alt="Perceptix Digital Official Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-none object-contain transition-transform group-hover:scale-[1.03]"
              />
            </Link>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              Perceptix Digital is a full-stack digital agency operating across strategy and execution. Websites, paid ads, SEO, and AI lead automation — managed under one roof.
            </p>

            <div className="pt-2 text-xs text-gray-600 space-y-1.5 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00BBA7]" />
                <a href="mailto:hello@perceptixdigital.com" className="hover:text-[#00BBA7] transition-colors">
                  hello@perceptixdigital.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Globe className="w-4 h-4 text-[#00BBA7]" />
                <span>US Client Strategy Hub & Pakistan Dev Hub</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-black">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 font-medium">
              <li>
                <Link to="/" className="hover:text-[#00BBA7] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00BBA7] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00BBA7] transition-colors">Services Directory</Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-[#00BBA7] transition-colors">Offers & Pricing</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#00BBA7] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#00BBA7] transition-colors">Insights & Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00BBA7] transition-colors">Contact Strategy Team</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Pre-Scoped Offers */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-black">
              Fixed-Price Offers
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 font-medium">
              <li>
                <button onClick={() => openModal('website')} className="hover:text-[#00BBA7] transition-colors text-left">
                  Authority Website ($500)
                </button>
              </li>
              <li>
                <button onClick={() => openModal('lead')} className="hover:text-[#00BBA7] transition-colors text-left">
                  Local Lead Engine ($500)
                </button>
              </li>
              <li>
                <button onClick={() => openModal('speed')} className="hover:text-[#00BBA7] transition-colors text-left">
                  The Speed Fix ($150)
                </button>
              </li>
              <li>
                <button onClick={() => openModal('custom')} className="hover:text-[#00BBA7] transition-colors text-left">
                  Custom Scope Request
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Operational Structure */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-black">
              Operational Structure
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Transparent dual-hub setup: US Operations for client strategy and Pakistan Development Hub for technical execution.
            </p>
            <div className="pt-2">
              <Link 
                to="/legal" 
                className="text-xs text-[#00BBA7] font-bold hover:underline flex items-center gap-1"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Privacy & Terms</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <div>
            © {new Date().getFullYear()} Perceptix Digital. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link to="/legal" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-black transition-colors">Contact Hub</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
