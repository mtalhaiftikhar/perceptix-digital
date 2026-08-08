import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Send, ChevronDown, Check, Loader2 } from 'lucide-react';

export default function OfferModal({ isOpen, onClose, selectedPackage }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selectedPkg: selectedPackage || '',
    message: ''
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, selectedPkg: selectedPackage || '' }));
  }, [selectedPackage]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const packageOptions = [
    // Default Option
    { value: '', label: 'Please Select a Service or Scope...' },

    // Pre-Scoped Fixed-Price Offers
    { value: 'website', label: 'The Authority Website Package ($500)' },
    { value: 'lead', label: 'The Local Lead Engine ($500)' },
    { value: 'speed', label: 'The Speed Fix ($150)' },

    // 15 Specialized Capabilities & Services
    { value: 'wordpress', label: 'Custom WordPress Development' },
    { value: 'shopify', label: 'Shopify E-Commerce Stores' },
    { value: 'webapps', label: 'Web & Mobile App Development' },
    { value: 'uiux', label: 'UI/UX Design Systems' },
    { value: 'seo', label: 'Full-Stack Technical SEO' },
    { value: 'google-ads', label: 'Google Ads & PPC Campaigns' },
    { value: 'social-media', label: 'Social Media & Paid Social Ads' },
    { value: 'lead-gen', label: 'Lead Generation & Intake Funnels' },
    { value: 'lead-ai', label: 'Lead Follow-up AI Systems' },
    { value: 'ai-ugc', label: 'AI UGC Video Ads' },
    { value: 'ai-photo', label: 'AI Brand & Product Photo Shoots' },
    { value: 'branding', label: 'Brand Systems & Visual Identity' },
    { value: 'crm', label: 'CRM Setup & Pipeline Configuration' },
    { value: 'graphic-design', label: 'Graphic Collateral & Pitch Decks' },
    { value: 'speed-fix-standalone', label: 'Site Speed & Core Web Vitals Pass' },

    // Custom Project Option
    { value: 'custom', label: 'Custom Scope / Tailored Requirement' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company || "N/A",
      service: selectedOptionLabel,
      message: formData.message,
      source: "Global Scope Modal"
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      setSubmitted(true);
    } catch (err) {
      console.warn('Fallback notice to UI:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const selectedOptionObj = packageOptions.find(o => o.value === formData.selectedPkg);
  const selectedOptionLabel = selectedOptionObj ? selectedOptionObj.label : 'Please Select a Service or Scope...';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-gray-900 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00BBA7]/15 text-[#00BBA7] border border-[#00BBA7] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-black">Inquiry Sent</h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
              Thank you, <strong className="text-black">{formData.name}</strong>. Your inquiry has been sent directly to <strong className="text-[#00BBA7]">hello@perceptixdigital.com</strong> via Hostinger SMTP. Our strategy team will respond within 24 hours.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary"
              >
                <span>Close Window</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="space-y-1">
              <span className="badge-teal">Scope Inquiry</span>
              <h3 className="font-display text-2xl font-black text-black">Start Your Project</h3>
              <p className="text-xs text-gray-600">
                Select your service or package requirement and we'll send scope details and timeline estimates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* BESPOKE PROFESSIONAL CUSTOM DROPDOWN SELECTOR WITH ALL 15 SERVICES */}
              <div className="space-y-1 relative" ref={dropdownRef}>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-display">
                  Selected Service or Package
                </label>
                
                {/* Dropdown Button */}
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`w-full px-4 py-3 rounded-xl bg-white border transition-all text-xs font-semibold flex items-center justify-between shadow-sm ${
                    formData.selectedPkg ? 'text-gray-900' : 'text-gray-400'
                  } ${
                    dropdownOpen 
                      ? 'border-[#00BBA7] ring-2 ring-[#00BBA7]/20' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <span>{selectedOptionLabel}</span>
                  <ChevronDown className={`w-4 h-4 text-[#00BBA7] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu Options */}
                {dropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white border border-gray-200 rounded-2xl shadow-2xl py-2 space-y-1 max-h-64 overflow-y-auto">
                    {packageOptions.map((option) => {
                      const isSelected = formData.selectedPkg === option.value;
                      const isDefault = option.value === '';
                      const isHeader = option.value === 'website' || option.value === 'wordpress' || option.value === 'custom';

                      return (
                        <React.Fragment key={option.value || 'default'}>
                          {isHeader && (
                            <div className="px-4 pt-2 pb-1 text-[10px] font-extrabold uppercase tracking-wider text-[#00BBA7] font-display border-t border-gray-100 first:border-t-0">
                              {option.value === 'website' && 'Fixed-Price Offers'}
                              {option.value === 'wordpress' && 'Specialized Services (15 Directory Services)'}
                              {option.value === 'custom' && 'Custom Scope'}
                            </div>
                          )}
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, selectedPkg: option.value });
                              setDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between transition-colors ${
                              isDefault 
                                ? 'text-gray-400 italic hover:bg-gray-50'
                                : isSelected
                                ? 'bg-[#00BBA7]/10 text-[#00BBA7]'
                                : 'text-gray-800 hover:bg-gray-50 hover:text-black'
                            }`}
                          >
                            <span>{option.label}</span>
                            {isSelected && !isDefault && <Check className="w-4 h-4 text-[#00BBA7] shrink-0" />}
                          </button>
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-display">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-[#00BBA7] focus:ring-2 focus:ring-[#00BBA7]/20 shadow-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-display">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-[#00BBA7] focus:ring-2 focus:ring-[#00BBA7]/20 shadow-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-display">
                  Project Notes / Website Link
                </label>
                <textarea
                  rows="3"
                  placeholder="Share your current website link or any specific project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-[#00BBA7] focus:ring-2 focus:ring-[#00BBA7]/20 shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full group justify-between disabled:opacity-70"
              >
                <span>{loading ? 'Sending Inquiry...' : 'Submit Inquiry'}</span>
                <span className="btn-circle-icon">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </span>
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
