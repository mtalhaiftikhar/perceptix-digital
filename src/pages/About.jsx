import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Shield, Zap, Users, Award, ShieldCheck } from 'lucide-react';

export default function About({ openModal }) {
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
    <div className="space-y-16 sm:space-y-24 py-8 bg-white text-gray-900">
      
      {/* Intro Header - Centered */}
      <section className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <span className="badge-teal">Behind Perceptix Digital</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            Built to Eliminate the Gaps Between Strategy, Design, and Technical Execution
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Most digital projects fail not because of bad intentions, but because the people doing the work are fragmented across different companies, time zones, and priorities.
          </p>
        </div>
      </section>

      {/* Dual Hub Structure — Operational Model */}
      <section className="container-custom">
        <div className="glass-card p-6 sm:p-10 md:p-12 space-y-8 border-t-4 border-t-[#00BBA7] bg-white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="badge-teal">Operational Model</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-black">
              Two Connected Hubs. One Accountable Team.
            </h2>
            <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
              We operate through two dedicated centers of operation designed to give you senior strategy, clear communication, and cost-efficient, high-quality development under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4">
            {/* US Hub */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 border-l-4 border-l-[#00BBA7] space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#00BBA7]/15 text-[#00BBA7] flex items-center justify-center font-bold font-display">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-black">Client Strategy — US Operations</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Handles scope definition, project management, client communication, and overall digital strategy. You always have a single point of contact who understands your business context and speaks your language.
              </p>
              <div className="space-y-2 pt-2 text-xs font-semibold text-gray-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>Direct daily communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>Scope definition & strategy alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>Single point of accountability</span>
                </div>
              </div>
            </div>

            {/* PK Hub */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 border-l-4 border-l-[#00BBA7] space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#00BBA7]/15 text-[#00BBA7] flex items-center justify-center font-bold font-display">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-black">Development Hub — Pakistan</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A dedicated in-house team of developers, UI designers, and automation specialists handling technical execution. Not gig freelancers — full-time engineers working exclusively on Perceptix projects.
              </p>
              <div className="space-y-2 pt-2 text-xs font-semibold text-gray-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>100% full-time in-house engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>High technical standards & code quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBA7]" />
                  <span>Cost efficiency passed to fixed-price offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN TRACK RECORD & TRUST METRICS SECTION (Directly Below Operational Model) */}
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

      {/* Core Beliefs */}
      <section className="container-custom space-y-8 sm:space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="badge-teal">Principles</span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-black">What We Believe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 border-l-4 border-l-[#00BBA7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#00BBA7]/15 text-[#00BBA7] flex items-center justify-center font-bold font-display">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-black">Clear Scopes over Open Retainers</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We prefer starting engagements with fixed prices and defined deliverables. You should know what you're paying for before any work begins.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 border-l-4 border-l-[#00BBA7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#00BBA7]/15 text-[#00BBA7] flex items-center justify-center font-bold font-display">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-black">Systems over Isolated Assets</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              A website alone won't grow your business. An ad campaign alone won't work without a conversion page. We build connected systems, not standalone deliverables.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 border-l-4 border-l-[#00BBA7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#00BBA7]/15 text-[#00BBA7] flex items-center justify-center font-bold font-display">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-black">Transparency over Agency Fluff</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We're open about how we work, who does the development, and what things cost. No buzzwords, no inflated headcount claims, no mystery billing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Standard Full Container Width Matching Grid */}
      <section className="container-custom">
        <div className="p-8 sm:p-12 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-4 w-full">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-black">Ready to Work with an Accountable Team?</h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            Start with a fixed-price Offer or tell us what's currently broken in your digital presence.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button 
              onClick={() => openModal()}
              className="btn-primary group"
            >
              <span>View Offers</span>
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
