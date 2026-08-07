import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function Offers({ openModal }) {
  const navigate = useNavigate();
  const [activeOfferId, setActiveOfferId] = useState('website');

  const offers = [
    {
      id: 'website',
      tag: 'Offer Page 1',
      name: 'The Authority Website Package',
      price: '$500',
      heroHeadline: 'A Website That Makes the Right First Impression — Built and Live, Fixed Price.',
      heroSub: "Most businesses lose credibility before a visitor even reads a word — an outdated design, a slow load time, or a site that clearly wasn't built by someone who does this for a living. The Authority Website Package fixes that in one fixed-price engagement.",
      timeline: '2–3 weeks from content and asset handoff to launch.',
      included: [
        '5–7 page custom WordPress website (Home, About, Services, Contact, and up to 3 additional pages)',
        'Mobile-first, responsive design',
        'On-page SEO setup (titles, meta descriptions, header structure, internal linking)',
        'Site speed optimization at launch',
        'Basic contact form integration'
      ],
      whoFor: 'Local businesses, service providers, and small companies that either don\'t have a website yet or are working off a template site that no longer reflects the business.',
      wontGet: 'This package is a website, not an ongoing marketing engagement. It doesn\'t include content marketing, paid ads, or automation — those are separate services if you need them once the site is live.'
    },
    {
      id: 'lead',
      tag: 'Offer Page 2',
      name: 'The Local Lead Engine',
      price: '$500',
      heroHeadline: "Stop Losing Leads to a Website That Doesn't Ask for the Sale.",
      heroSub: "A website that gets traffic but doesn't capture leads is a business card, not a sales tool. The Local Lead Engine gives local businesses a dedicated landing page and a working system to capture and route every lead that comes in.",
      timeline: '1–2 weeks from intake to launch.',
      included: [
        'SEO-optimized, conversion-focused landing page',
        'Lead capture form connected to a working intake system',
        'Automated lead notification setup'
      ],
      whoFor: 'Local businesses that already get some traffic or foot interest but have no consistent system for capturing contact information and following up.',
      wontGet: 'This is a landing page and capture system, not a full multi-page website or an ad-spend campaign. If you need traffic driven to the page, pair this with our Google Ads or SEO services.'
    },
    {
      id: 'speed',
      tag: 'Offer Page 3',
      name: 'The Speed Fix',
      price: '$150',
      heroHeadline: "Every Second Your Site Takes to Load Is a Visitor You're Paying to Lose.",
      heroSub: "Slow websites lose visitors, rank worse on Google, and quietly cost businesses money every day they stay online. The Speed Fix is a focused, fixed-price optimization pass for sites that already exist but load too slowly.",
      timeline: '3–5 business days.',
      included: [
        'Full site speed audit (images, scripts, hosting-level factors)',
        'Image compression and optimization',
        'Caching and technical speed fixes',
        'Before-and-after load time report'
      ],
      whoFor: 'Anyone with an existing website — on WordPress, Shopify, or another platform — who suspects (or has confirmed) that slow load times are hurting conversions or rankings.',
      wontGet: "This is a technical speed pass, not a redesign, SEO overhaul, or content update. If your site needs more than a speed fix, we'll tell you honestly during the audit."
    }
  ];

  const currentOffer = offers.find(o => o.id === activeOfferId) || offers[0];

  return (
    <div className="space-y-12 sm:space-y-16 py-8 bg-white text-gray-900">
      
      {/* Intro Header - Perfectly Centered */}
      <section className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <span className="badge-teal">Fixed Price · Defined Scope</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            Defined Scope. Fixed Price. No Discovery-Call Runaround.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Our Offers are pre-packaged services built around the problems we see most often — a missing web presence, no way to capture leads, or a slow site quietly losing customers. Each one has a fixed price and a clear deliverable before you ever get on a call.
          </p>
        </div>
      </section>

      {/* Package Selector Tabs */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <button
              key={offer.id}
              onClick={() => setActiveOfferId(offer.id)}
              className={`p-6 rounded-2xl text-left transition-all border ${
                activeOfferId === offer.id
                  ? 'bg-white border-[#00BBA7] shadow-xl ring-2 ring-[#00BBA7]/40'
                  : 'bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 font-display">{offer.tag}</span>
                <span className="text-xl font-black text-[#00BBA7] font-display">{offer.price}</span>
              </div>
              <h3 className="font-display text-base font-bold text-black mb-1">{offer.name}</h3>
              <div className="text-xs text-gray-500 font-medium">Delivery: {offer.timeline.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Selected Offer Deep-Dive View */}
      <section className="container-custom">
        <div className="glass-card p-6 sm:p-10 md:p-12 space-y-8 sm:space-y-10 border-t-4 border-t-[#00BBA7] bg-white">
          
          {/* Header */}
          <div className="space-y-4 border-b border-gray-200 pb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="badge-teal">{currentOffer.name}</span>
              <div className="font-display text-2xl sm:text-3xl font-black text-[#00BBA7]">{currentOffer.price} Fixed Price</div>
            </div>
            <h2 className="font-display text-xl sm:text-3xl font-black text-black leading-snug">
              {currentOffer.heroHeadline}
            </h2>
            <p className="text-xs sm:text-base text-gray-700 leading-relaxed max-w-3xl">
              {currentOffer.heroSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: What's Included & What You Won't Get */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Included */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-black flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00BBA7]" />
                  <span>What's Included</span>
                </h3>
                <div className="space-y-3">
                  {currentOffer.included.map((item, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#00BBA7] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Won't Get */}
              <div className="space-y-3">
                <h3 className="font-display text-sm font-bold text-gray-700 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-gray-400" />
                  <span>What You Won't Get</span>
                </h3>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500 leading-relaxed">
                  {currentOffer.wontGet}
                </div>
              </div>

            </div>

            {/* Right: Target Audience, Timeline & Action */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Who This Is For */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#00BBA7]">Who This Is For</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentOffer.whoFor}
                </p>
              </div>

              {/* Timeline */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#00BBA7]" />
                  <span>Delivery Timeline</span>
                </h4>
                <p className="font-display text-sm font-bold text-black">
                  {currentOffer.timeline}
                </p>
              </div>

              {/* Action buttons - Full Capsule Pill Circle with Embedded Circle Target Badges */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => openModal(currentOffer.id)}
                  className="btn-primary group w-full justify-between"
                >
                  <span>Start This Project ({currentOffer.price})</span>
                  <span className="btn-circle-icon">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="btn-secondary group w-full justify-between"
                >
                  <span>Ask a Question First</span>
                  <span className="btn-circle-icon">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Offers Page Closing CTA - Full Container Width */}
      <section className="container-custom">
        <div className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-4 w-full">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-black">Need Something That Doesn't Fit Neatly Into a Package?</h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            That's most projects. Talk to us about a custom scope tailored to your specific bottleneck.
          </p>
          <div className="pt-2 flex justify-center">
            <button 
              onClick={() => openModal('custom')}
              className="btn-primary group"
            >
              <span>Talk to Us About a Custom Scope</span>
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
