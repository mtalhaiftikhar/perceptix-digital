import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroAnimation from '../components/HeroAnimation';
import { ArrowRight, CheckCircle2, Layers, Cpu, TrendingUp, Sparkles, Users, Award, ShieldCheck, Zap } from 'lucide-react';

export default function Home({ openModal }) {
  const navigate = useNavigate();

  const stats = [
    {
      number: "100+",
      label: "Satisfied Clients",
      subtext: "Across US, Canada, and global markets",
      icon: Users
    },
    {
      number: "100+",
      label: "Completed Projects",
      subtext: "Websites, lead engines, & automations",
      icon: Award
    },
    {
      number: "99.4%",
      label: "On-Time Delivery",
      subtext: "Strict adherence to agreed timelines",
      icon: ShieldCheck
    },
    {
      number: "100%",
      label: "Fixed-Scope Guarantee",
      subtext: "Pre-agreed deliverables with zero hidden fees",
      icon: Zap
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 bg-white text-gray-900">
      
      {/* HERO SECTION - TIGHT TOP PADDING */}
      <section className="relative pt-2 sm:pt-4 md:pt-5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* Badge Bar - Simple Bold Green Text Line */}
              <div className="flex items-center gap-2">
                <span className="badge-teal">Full-Stack Digital Agency</span>
              </div>

              {/* Locked Headline Option A */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-[1.15]">
                  One Team. Every System Your Business Needs to Grow.
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl font-normal">
                  From your website to your ad campaigns to the automations that follow up with every lead — Perceptix Digital designs, builds, and manages it all under one roof.
                </p>
              </div>

              {/* Bespoke Capsule Pill Buttons with Embedded Circle Target Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <button 
                  onClick={() => openModal()}
                  className="btn-primary group"
                >
                  <span>View Our Offers</span>
                  <span className="btn-circle-icon">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <button 
                  onClick={() => navigate('/services')}
                  className="btn-secondary group"
                >
                  <span>See What We Do</span>
                  <span className="btn-circle-icon">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

              {/* Differentiator guarantee note from copy */}
              <div className="pt-3 border-t border-gray-200 flex flex-wrap items-center gap-5 text-xs text-gray-600">
                <div className="flex items-center gap-2 font-bold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>Fixed-Price Packages</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>Senior US Strategy + Dev Hub</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Animated Hero Canvas Graphic */}
            <div className="lg:col-span-5">
              <HeroAnimation />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST METRICS & STATS SECTION */}
      <section className="container-custom">
        <div className="glass-card p-8 sm:p-10 md:p-12 relative overflow-hidden bg-gradient-to-br from-white via-gray-50/80 to-white border border-gray-200 border-t-4 border-t-[#00BBA7]">
          {/* Subtle Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,187,167,0.4) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} 
          />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200/80 pb-6">
              <div>
                <span className="badge-teal mb-1">Proven Track Record</span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-black">
                  Built on Results & Client Trust
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 max-w-sm">
                Engineering websites, ad channels, and automated workflows that deliver measurable ROI.
              </p>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div key={i} className="space-y-2 group">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#00BBA7]/12 text-[#00BBA7] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-display">
                        {stat.label}
                      </span>
                    </div>

                    <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight group-hover:text-[#00BBA7] transition-colors">
                      {stat.number}
                    </div>

                    <p className="text-xs text-gray-600 font-medium">
                      {stat.subtext}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP (Below the fold) */}
      <section className="border-y border-gray-200 bg-gray-50/70 py-5 sm:py-6 relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-bold text-black font-display">
              <span>Website Design & Development</span>
              <span className="text-[#00BBA7]">·</span>
              <span>SEO</span>
              <span className="text-[#00BBA7]">·</span>
              <span>Paid Ads</span>
              <span className="text-[#00BBA7]">·</span>
              <span>AI Automation</span>
              <span className="text-[#00BBA7]">·</span>
              <span>Branding</span>
            </div>
            
            <div className="text-xs font-extrabold text-[#00BBA7] border-l-4 border-l-[#00BBA7] pl-3 py-1 font-display tracking-wider text-center md:text-left">
              ONE TEAM. NO HANDOFFS, NO FINGER-POINTING.
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM WE SOLVE (CORE DIFFERENTIATOR WITH RIGHT SIDE ILLUSTRATION GRAPHIC) */}
      <section className="container-custom">
        <div className="glass-card p-6 sm:p-10 md:p-12 relative overflow-hidden bg-white border border-gray-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <span className="badge-teal">Core Differentiator</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
                The Problem We Solve
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Most businesses don't have a marketing problem or a website problem — they have a <strong className="text-black underline decoration-[#00BBA7] underline-offset-4 font-bold">fragmentation problem</strong>. A designer builds the site. A separate freelancer runs the ads. Nobody owns the follow-up. Leads fall through the cracks between vendors who've never spoken to each other.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 text-xs sm:text-sm font-semibold leading-relaxed space-y-2">
                <div className="text-[#00BBA7] font-bold font-display uppercase tracking-wider text-xs">The Perceptix Advantage</div>
                <p>
                  <strong className="text-black font-bold">Perceptix Digital exists to close those gaps</strong> — one accountable team responsible for the site, the traffic, and the systems that turn that traffic into paying customers.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>Single Point of Accountability</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>Zero Lead Leakage</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Illustration Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50 group">
                <img 
                  src="/integrated_agency_system.jpg" 
                  alt="Integrated Digital Agency System Architecture"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Overlay Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00BBA7] animate-pulse" />
                      <span className="text-xs font-extrabold text-black font-display uppercase tracking-wider">
                        UNIFIED AGENCY SYSTEM
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#00BBA7] bg-[#00BBA7]/10 px-2 py-0.5 rounded">
                      100% ACCOUNTABLE
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 font-medium">
                    Web + SEO + Ads + AI Lead Intake working as one engine.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO (4 PILLARS) */}
      <section className="container-custom space-y-8 sm:space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="badge-teal mb-2">Service Framework</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-black">What We Do (4 Pillars)</h2>
          </div>
          <button 
            onClick={() => navigate('/services')}
            className="text-xs sm:text-sm font-bold text-[#00BBA7] hover:underline flex items-center gap-1.5 group"
          >
            <span>See All 15 Detailed Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <div className="glass-card p-6 sm:p-8 space-y-4 hover:border-[#00BBA7]/50 group">
            <div className="w-12 h-12 rounded-xl bg-[#00BBA7]/10 border border-[#00BBA7]/30 flex items-center justify-center text-[#00BBA7]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-black group-hover:text-[#00BBA7] transition-colors">
              Web & Product Development
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Websites, e-commerce stores, web apps, and mobile apps built to perform, not just launch. Engineered for fast load times, SEO structure, and high conversion.
            </p>
            <div className="text-xs text-gray-600 pt-2 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">WordPress</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Shopify</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Web & Mobile Apps</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">UI/UX Design</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card p-6 sm:p-8 space-y-4 hover:border-[#00BBA7]/50 group">
            <div className="w-12 h-12 rounded-xl bg-[#00BBA7]/10 border border-[#00BBA7]/30 flex items-center justify-center text-[#00BBA7]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-black group-hover:text-[#00BBA7] transition-colors">
              Growth & Visibility
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              SEO, Google Ads, social media, and lead generation systems built to bring in customers who are ready to buy — focusing on lower cost per lead.
            </p>
            <div className="text-xs text-gray-600 pt-2 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Full Stack SEO</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Google Ads</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Social Media</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Lead Systems</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card p-6 sm:p-8 space-y-4 hover:border-[#00BBA7]/50 group">
            <div className="w-12 h-12 rounded-xl bg-[#00BBA7]/10 border border-[#00BBA7]/30 flex items-center justify-center text-[#00BBA7]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-black group-hover:text-[#00BBA7] transition-colors">
              AI & Automation
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Automation and AI-generated ad creative that lets your business follow up on every lead without hiring more people to do it manually.
            </p>
            <div className="text-xs text-gray-600 pt-2 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Lead Follow-up AI</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">AI UGC Ads</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">AI Photo Shoots</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="glass-card p-6 sm:p-8 space-y-4 hover:border-[#00BBA7]/50 group">
            <div className="w-12 h-12 rounded-xl bg-[#00BBA7]/10 border border-[#00BBA7]/30 flex items-center justify-center text-[#00BBA7]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-black group-hover:text-[#00BBA7] transition-colors">
              Brand & Design
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Branding, graphic design, and CRM setup (Zoho, GoHighLevel, HubSpot) that make the back end of your business as strong as the front end.
            </p>
            <div className="text-xs text-gray-600 pt-2 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Brand Systems</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">CRM Configuration</span>
              <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 font-medium">Graphic Collateral</span>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS TEASER (FIXED PRICE PACKAGES) */}
      <section className="container-custom space-y-8 sm:space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="badge-teal">Fixed-Price Packages</span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-black">
            Start With a Defined Scope and a Fixed Price
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            No lengthy discovery calls before you know what something costs. Our Offers are pre-scoped, fixed-price packages — a clear way to start working with us before committing to a larger engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Offer 1 */}
          <div className="glass-card p-6 flex flex-col justify-between space-y-6 border-t-4 border-t-[#00BBA7]">
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 font-display">Package 01</span>
                <span className="text-2xl font-black text-[#00BBA7] font-display">$500</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-black">The Authority Website Package</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A full 5–7 page custom WordPress website, on-page SEO, and speed optimization — a complete, credible web presence built and launched.
              </p>
            </div>
            
            <button
              onClick={() => openModal('website')}
              className="btn-primary group w-full justify-between"
            >
              <span>View Details & Start</span>
              <span className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Offer 2 */}
          <div className="glass-card p-6 flex flex-col justify-between space-y-6 border-t-4 border-t-[#00BBA7]">
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 font-display">Package 02</span>
                <span className="text-2xl font-black text-[#00BBA7] font-display">$500</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-black">The Local Lead Engine</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A high-converting landing page plus a complete lead generation system — built to capture and route leads for local businesses automatically.
              </p>
            </div>

            <button
              onClick={() => openModal('lead')}
              className="btn-primary group w-full justify-between"
            >
              <span>View Details & Start</span>
              <span className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Offer 3 */}
          <div className="glass-card p-6 flex flex-col justify-between space-y-6 border-t-4 border-t-[#00BBA7]">
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 font-display">Package 03</span>
                <span className="text-2xl font-black text-[#00BBA7] font-display">$150</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-black">The Speed Fix</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A full website speed optimization pass — for businesses that already have a site but are losing visitors and rankings to slow load times.
              </p>
            </div>

            <button
              onClick={() => openModal('speed')}
              className="btn-primary group w-full justify-between"
            >
              <span>View Details & Start</span>
              <span className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="container-custom space-y-8 sm:space-y-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="badge-teal mb-2">Process & Delivery</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-black">How We Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#00BBA7]/15 text-[#00BBA7] font-bold text-sm flex items-center justify-center font-display">
              01
            </div>
            <h3 className="font-display text-base font-bold text-black">Scope the Problem</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We start with what's actually holding your business back, not a generic checklist.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#00BBA7]/15 text-[#00BBA7] font-bold text-sm flex items-center justify-center font-display">
              02
            </div>
            <h3 className="font-display text-base font-bold text-black">Build</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our development team executes the work — website, campaign, or automation — on a fixed timeline.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#00BBA7]/15 text-[#00BBA7] font-bold text-sm flex items-center justify-center font-display">
              03
            </div>
            <h3 className="font-display text-base font-bold text-black">Launch & Measure</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              You get a working system, not a "final draft." We track what it does and verify impact.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#00BBA7]/15 text-[#00BBA7] font-bold text-sm flex items-center justify-center font-display">
              04
            </div>
            <h3 className="font-display text-base font-bold text-black">Scale (If It's Working)</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Clients who see results typically expand into an ongoing retainer. Nobody's required to.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES TEASER */}
      <section className="container-custom">
        <div className="glass-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-l-[#00BBA7] bg-white">
          <div className="space-y-2 max-w-xl">
            <span className="badge-teal">Client Case Studies</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-black">See the Work</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Businesses across services, SaaS, and e-commerce have used Perceptix Digital to rebuild their web presence, generate leads, or automate their follow-up. Here's how those projects came together.
            </p>
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="btn-secondary group whitespace-nowrap"
          >
            <span>View Case Studies & Insights</span>
            <span className="btn-circle-icon">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-custom">
        <div className="p-8 sm:p-12 md:p-14 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-4 w-full shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="flex justify-center">
              <span className="badge-teal">Start a Conversation</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-black">Tell Us What's Not Working</h2>
            <p className="text-xs sm:text-base text-gray-600">
              Whether it's a site that doesn't convert, leads that go cold, or a process that still runs on spreadsheets — start with a conversation, not a sales pitch.
            </p>
            <div className="pt-3 flex justify-center gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary group"
              >
                <span>Get Started</span>
                <span className="btn-circle-icon">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
