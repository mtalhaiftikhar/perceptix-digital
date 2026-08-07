import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';

export default function FAQ({ openModal }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How is Perceptix Digital different from other agencies?",
      a: "We're structured as one accountable team across strategy and execution, instead of a project manager relaying work between disconnected freelancers. You get one point of contact and a development team that works exclusively on client projects.",
      cat: "Agency Structure"
    },
    {
      q: "Who will I actually be working with?",
      a: "A US-based strategy contact handles your scope, timeline, and communication. Our in-house development hub in Pakistan handles the technical execution. We're transparent about this structure — it's how we keep senior-level work at a fixed price.",
      cat: "Team & Operations"
    },
    {
      q: "How long does a typical project take?",
      a: "It depends on scope. Our fixed-price Offers list specific timelines on each Offer page (e.g. 2-3 weeks for Authority Website, 1-2 weeks for Lead Engine, 3-5 days for Speed Fix). Custom projects are scoped individually after an initial conversation.",
      cat: "Timelines & Scope"
    },
    {
      q: "Do you offer support after launch?",
      a: "Yes. Each Offer includes a defined post-launch check-in; ongoing support and maintenance are available as an add-on or through a monthly retainer.",
      cat: "Post-Launch Support"
    },
    {
      q: "What if I only need one service, not a whole package?",
      a: "That's most clients. Our 15 services are available individually — the Offers exist for businesses that want a pre-scoped starting point.",
      cat: "Services & Flexibility"
    },
    {
      q: "Can I start with an Offer and expand later?",
      a: "Yes — many clients start with a fixed-price Offer, then move into an ongoing retainer covering SEO, ads, or automation once they've seen the initial results.",
      cat: "Growth & Retainers"
    },
    {
      q: "What platforms do you build on?",
      a: "Primarily WordPress for websites and Shopify for e-commerce. For CRM, we work with Zoho, GoHighLevel, HubSpot, and others depending on what you're already using.",
      cat: "Tech Stack"
    },
    {
      q: "Do you require long-term contracts?",
      a: "Fixed-price Offers are one-time engagements with no contract required. Ongoing services (SEO, ads, retainers) are month-to-month unless otherwise agreed.",
      cat: "Contracts & Billing"
    },
    {
      q: "How do we get started?",
      a: "Reach out through the contact form or book a call. We'll confirm scope and next steps before any payment is made.",
      cat: "Onboarding"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10 sm:space-y-14 py-8 bg-white text-gray-900">
      
      {/* Intro Header - Perfectly Centered */}
      <section className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <span className="badge-teal">Transparent Answers</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our team structure, fixed-price packages, technology stack, and delivery workflow — without the corporate runaround.
          </p>
        </div>
      </section>

      {/* Search Input - Perfectly Centered in Page */}
      <section className="container-custom">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#00BBA7]/10 flex items-center justify-center text-[#00BBA7]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search questions or topics (e.g. support, WordPress, team)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-3.5 rounded-full bg-gray-50/80 border border-gray-300 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00BBA7] focus:ring-2 focus:ring-[#00BBA7]/20 shadow-sm transition-all"
          />
        </div>
      </section>

      {/* Accordion List - Perfectly Centered & Full Width */}
      <section className="container-custom">
        <div className="space-y-4 w-full max-w-4xl mx-auto">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen 
                    ? 'bg-white border-[#00BBA7] shadow-md ring-1 ring-[#00BBA7]/30' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-black text-base sm:text-lg font-display"
                >
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                    <span className="text-[11px] px-3.5 py-1 rounded-full bg-[#00BBA7] text-white font-extrabold font-display shrink-0 shadow-sm">
                      {faq.cat}
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#00BBA7] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Closing CTA - Full Container Width */}
      <section className="container-custom">
        <div className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-4 w-full">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-black">Have a Question That Isn't Answered Here?</h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            Send us a direct message and our US strategy team will answer within 1 business day.
          </p>
          <div className="pt-2 flex justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary group"
            >
              <span>Ask Us Directly</span>
              <span className="btn-circle-icon">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
