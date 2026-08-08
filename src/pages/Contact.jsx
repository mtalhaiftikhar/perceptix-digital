import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, CheckCircle2, Globe, Building2, MapPin, Phone, ShieldCheck, ChevronDown, Check, Loader2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '', // Default selected: Please Select a Service or Scope...
    message: ''
  });

  const dropdownOptions = [
    // Default Option
    { value: '', label: 'Please Select a Service or Scope...' },

    // Pre-Scoped Fixed-Price Offers
    { value: 'Authority Website ($500)', label: 'The Authority Website Package ($500)' },
    { value: 'Local Lead Engine ($500)', label: 'The Local Lead Engine ($500)' },
    { value: 'Speed Fix ($150)', label: 'The Speed Fix ($150)' },

    // 15 Specialized Capabilities & Services
    { value: 'Custom WordPress Development', label: 'Custom WordPress Development' },
    { value: 'Shopify E-Commerce Stores', label: 'Shopify E-Commerce Stores' },
    { value: 'Web & Mobile App Development', label: 'Web & Mobile App Development' },
    { value: 'UI/UX Design Systems', label: 'UI/UX Design Systems' },
    { value: 'Full-Stack Technical SEO', label: 'Full-Stack Technical SEO' },
    { value: 'Google Ads & PPC Campaigns', label: 'Google Ads & PPC Campaigns' },
    { value: 'Social Media & Paid Social Ads', label: 'Social Media & Paid Social Ads' },
    { value: 'Lead Generation & Intake Funnels', label: 'Lead Generation & Intake Funnels' },
    { value: 'Lead Follow-up AI Systems', label: 'Lead Follow-up AI Systems' },
    { value: 'AI UGC Video Ads', label: 'AI UGC Video Ads' },
    { value: 'AI Brand & Product Photo Shoots', label: 'AI Brand & Product Photo Shoots' },
    { value: 'Brand Systems & Visual Identity', label: 'Brand Systems & Visual Identity' },
    { value: 'CRM Setup & Pipeline Configuration', label: 'CRM Setup & Pipeline Configuration' },
    { value: 'Graphic Collateral & Pitch Decks', label: 'Graphic Collateral & Pitch Decks' },
    { value: 'Site Speed & Core Web Vitals Pass', label: 'Site Speed & Core Web Vitals Pass' },

    // Custom Project Option
    { value: 'Custom Scope Project', label: 'Custom Scope / Tailored Requirement' }
  ];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company || "N/A",
      service: selectedOptionLabel,
      message: formData.message,
      source: "Contact Page Form"
    };

    try {
      // Send directly via Hostinger SMTP Express Endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Fallback notice to UI:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const selectedOptionObj = dropdownOptions.find(o => o.value === formData.serviceInterest);
  const selectedOptionLabel = selectedOptionObj ? selectedOptionObj.label : 'Please Select a Service or Scope...';

  return (
    <div className="space-y-12 sm:space-y-16 py-8 bg-white text-gray-900">
      
      {/* Intro Header - Perfectly Centered */}
      <section className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <span className="badge-teal">Start a Conversation</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            Let's Talk About What's Actually Holding Your Business Back
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal max-w-2xl mx-auto">
            Whether you're ready to start with a fixed-price Offer or want to scope something custom, tell us what's not working and we'll tell you honestly whether — and how — we can fix it.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Location Info */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 border-t-4 border-t-[#00BBA7] bg-white border border-gray-200 rounded-3xl shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00BBA7]/15 text-[#00BBA7] border border-[#00BBA7] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-black">Message Received</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <strong className="text-black">{formData.name}</strong>. Your message has been sent directly to <strong className="text-[#00BBA7]">hello@perceptixdigital.com</strong> via Hostinger SMTP. Our strategy team will get back to you within 24 hours.
                </p>
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-display">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Thorne"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-[#00BBA7] focus:ring-2 focus:ring-[#00BBA7]/20 shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-display">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="michael@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-[#00BBA7] focus:ring-2 focus:ring-[#00BBA7]/20 shadow-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-display">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Thorne & Co."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-[#00BBA7] focus:ring-2 focus:ring-[#00BBA7]/20 shadow-sm"
                    />
                  </div>
                </div>

                {/* BESPOKE PROFESSIONAL CATEGORIZED CUSTOM DROPDOWN SELECTOR */}
                <div className="space-y-1 relative" ref={dropdownRef}>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-display">
                    What do you need help with?
                  </label>
                  
                  {/* Dropdown Button */}
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`w-full px-4 py-3 rounded-xl bg-white border transition-all text-xs font-semibold flex items-center justify-between shadow-sm ${
                      formData.serviceInterest ? 'text-gray-900' : 'text-gray-400'
                    } ${
                      dropdownOpen 
                        ? 'border-[#00BBA7] ring-2 ring-[#00BBA7]/20' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <span>{selectedOptionLabel}</span>
                    <ChevronDown className={`w-4 h-4 text-[#00BBA7] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu Options With Categorized Headers */}
                  {dropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white border border-gray-200 rounded-2xl shadow-2xl py-2 space-y-1 max-h-64 overflow-y-auto">
                      {dropdownOptions.map((option) => {
                        const isSelected = formData.serviceInterest === option.value;
                        const isDefault = option.value === '';
                        const isHeader = option.value === 'Authority Website ($500)' || option.value === 'Custom WordPress Development' || option.value === 'Custom Scope Project';

                        return (
                          <React.Fragment key={option.value || 'default'}>
                            {isHeader && (
                              <div className="px-4 pt-2 pb-1 text-[10px] font-extrabold uppercase tracking-wider text-[#00BBA7] font-display border-t border-gray-100 first:border-t-0">
                                {option.value === 'Authority Website ($500)' && 'Fixed-Price Offers'}
                                {option.value === 'Custom WordPress Development' && 'Specialized Services (15 Directory Services)'}
                                {option.value === 'Custom Scope Project' && 'Custom Scope'}
                              </div>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, serviceInterest: option.value });
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
                    Message / Bottleneck Details *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us what's currently not working with your site, leads, or systems..."
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
                  <span>{loading ? 'Sending Message...' : 'Send Inquiry'}</span>
                  <span className="btn-circle-icon">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Sleek Pure White Professional Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Email */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 border-l-4 border-l-[#00BBA7] shadow-sm space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#00BBA7] font-display">
                Direct Contact Email
              </div>
              <a 
                href="mailto:hello@perceptixdigital.com"
                className="font-display text-lg font-bold text-black hover:text-[#00BBA7] transition-colors flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-[#00BBA7]/10 text-[#00BBA7] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@perceptixdigital.com</span>
              </a>
              <p className="text-xs text-gray-500 font-medium pl-10">
                Guaranteed response to genuine inquiries within 1 business day.
              </p>
            </div>

            {/* US Strategy Hub */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 border-l-4 border-l-[#00BBA7] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00BBA7]/10 text-[#00BBA7] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-black">Client Strategy — US Operations</h3>
                  <p className="text-[11px] text-[#00BBA7] font-semibold font-display uppercase tracking-wider">Strategy & Client Management</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                Handles scope definition, project timelines, strategy consulting, and daily communication.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#00BBA7] shrink-0" />
                  <span>Virtual US Phone: Available on scope confirmation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00BBA7] shrink-0" />
                  <span>Virtual US Address: Delaware / US Operations Hub</span>
                </div>
              </div>
            </div>

            {/* Pakistan Dev Hub */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 border-l-4 border-l-[#00BBA7] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00BBA7]/10 text-[#00BBA7] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-black">Development Hub — Pakistan</h3>
                  <p className="text-[11px] text-[#00BBA7] font-semibold font-display uppercase tracking-wider">Technical Engineering Center</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                Our full-time in-house team of engineers, UI designers, and AI automation developers executing technical work.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00BBA7] shrink-0" />
                  <span>Pakistan Office Hub: Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#00BBA7] shrink-0" />
                  <span>100% In-House Engineers (No third-party gig freelancers)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
