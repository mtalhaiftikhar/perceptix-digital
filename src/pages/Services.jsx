import React, { useState } from 'react';
import { Search, Layers, TrendingUp, Cpu, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services({ setActivePage, openModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'All', label: 'All 15 Services' },
    { id: 'web', label: 'Web Dev' },
    { id: 'growth', label: 'Growth & SEO' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'brand', label: 'Brand & CRM' }
  ];

  const allServices = [
    // Pillar 1: Web & Product Development
    {
      id: 'wordpress',
      pillar: 'web',
      pillarName: 'Web & Product Development',
      name: 'Custom WordPress Development',
      summary: 'Tailored 5–7+ page custom WordPress sites engineered for performance, mobile responsiveness, and easy client editing.',
      deliverables: ['Custom theme setup', 'Mobile responsiveness', 'On-page SEO structure', 'Speed pass at launch']
    },
    {
      id: 'shopify',
      pillar: 'web',
      pillarName: 'Web & Product Development',
      name: 'Shopify E-Commerce Stores',
      summary: 'High-converting e-commerce storefronts optimized for checkout speed, product catalog management, and payment routing.',
      deliverables: ['Storefront setup', 'Product catalog import', 'Payment & shipping config', 'Checkout optimization']
    },
    {
      id: 'webapps',
      pillar: 'web',
      pillarName: 'Web & Product Development',
      name: 'Web & Mobile Apps',
      summary: 'Custom client portals, SaaS MVPs, and business utilities built to streamline internal processes or deliver software products.',
      deliverables: ['Full-stack development', 'API integrations', 'User authentication', 'Database architecture']
    },
    {
      id: 'uiux',
      pillar: 'web',
      pillarName: 'Web & Product Development',
      name: 'UI/UX Design',
      summary: 'User-centered design systems, wireframes, and high-fidelity prototypes that turn complex user flows into intuitive experiences.',
      deliverables: ['Figma design files', 'Clickable prototypes', 'Mobile & desktop layouts', 'Design component library']
    },

    // Pillar 2: Growth & Visibility
    {
      id: 'seo',
      pillar: 'growth',
      pillarName: 'Growth & Visibility',
      name: 'Full-Stack SEO',
      summary: 'On-page, technical, and local SEO campaigns that build authority and drive organic traffic from customers searching for your services.',
      deliverables: ['Technical SEO audit', 'On-page optimization', 'Keyword strategy', 'Monthly performance reporting']
    },
    {
      id: 'google-ads',
      pillar: 'growth',
      pillarName: 'Growth & Visibility',
      name: 'Google Ads & PPC',
      summary: 'Search and display campaigns focused on low cost-per-lead and qualified sales inquiries — backed by dedicated landing pages.',
      deliverables: ['Keyword research & negative lists', 'Ad copy writing', 'Conversion API tracking', 'Weekly bid optimization']
    },
    {
      id: 'social-media',
      pillar: 'growth',
      pillarName: 'Growth & Visibility',
      name: 'Social Media Strategy & Paid Social',
      summary: 'Targeted ad campaigns across Meta and LinkedIn designed to reach your ideal buyer demographic with compelling creative.',
      deliverables: ['Ad creative design', 'Audience targeting setup', 'A/B testing', 'ROI analytics dashboard']
    },
    {
      id: 'lead-gen',
      pillar: 'growth',
      pillarName: 'Growth & Visibility',
      name: 'Lead Generation Systems',
      summary: 'End-to-end funnels combining traffic, high-converting landing pages, and lead routing to ensure no inquiry goes unserved.',
      deliverables: ['Funnel design', 'Lead intake integration', 'Automated notifications', 'Conversion tracking']
    },

    // Pillar 3: AI & Automation
    {
      id: 'lead-ai',
      pillar: 'ai',
      pillarName: 'AI & Automation',
      name: 'Lead Follow-up AI Systems',
      summary: 'Automated SMS, email, and CRM follow-up workflows that contact leads within 5 minutes of form submission.',
      deliverables: ['Speed-to-lead workflows', 'SMS & email triggers', 'CRM sync', 'Multi-touch sequences']
    },
    {
      id: 'ai-ugc',
      pillar: 'ai',
      pillarName: 'AI & Automation',
      name: 'AI UGC Ads',
      summary: 'AI-generated video ad scripts and avatars that deliver authentic, high-converting user-generated content for paid social campaigns.',
      deliverables: ['AI video generation', 'Script writing', 'Platform formatting', 'A/B creative variations']
    },
    {
      id: 'ai-photo',
      pillar: 'ai',
      pillarName: 'AI & Automation',
      name: 'AI Photo Shoots',
      summary: 'Professional product and brand imagery generated with AI — cutting production costs without sacrificing visual quality.',
      deliverables: ['Product placement renders', 'Brand lifestyle imagery', 'High-res exports', 'Commercial license']
    },

    // Pillar 4: Brand & Design
    {
      id: 'branding',
      pillar: 'brand',
      pillarName: 'Brand & Design',
      name: 'Brand Systems & Visual Identity',
      summary: 'Complete brand guidelines, logos, color palettes, and typography rules that give your company a cohesive, premium market presence.',
      deliverables: ['Logo suite', 'Color & font guidelines', 'Brand book', 'Social asset templates']
    },
    {
      id: 'crm',
      pillar: 'brand',
      pillarName: 'Brand & Design',
      name: 'CRM Setup & Configuration',
      summary: 'Implementation and optimization for Zoho, GoHighLevel, HubSpot, and custom CRMs — structuring your pipeline for clarity.',
      deliverables: ['Pipeline configuration', 'Contact migration', 'Custom fields & tags', 'Staff training']
    },
    {
      id: 'graphic-design',
      pillar: 'brand',
      pillarName: 'Brand & Design',
      name: 'Graphic Collateral & Pitch Decks',
      summary: 'Professional pitch decks, brochures, case study PDF templates, and sales assets aligned with your visual identity.',
      deliverables: ['Pitch deck design', 'PDF brochure layout', 'Print-ready files', 'Editable templates']
    },
    {
      id: 'speed-fix-standalone',
      pillar: 'web',
      pillarName: 'Web & Product Development',
      name: 'Site Speed & Core Web Vitals Pass',
      summary: 'A standalone technical performance pass for existing websites suffering from slow load times, image bloat, or plugin overhead.',
      deliverables: ['Image compression pass', 'Script deferral', 'PageSpeed 90+ target', 'Before/after report']
    }
  ];

  const filteredServices = allServices.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.pillar === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.pillarName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 py-8 bg-white text-gray-900">
      
      {/* Intro Header - Perfectly Centered */}
      <section className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <span className="badge-teal">Complete Capability Directory</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            15 Specialized Services. One Accountable Team.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Whether you need a single service or an end-to-end system spanning web, ads, and automation — every capability below is delivered by our full-time, in-house team.
          </p>
        </div>
      </section>

      {/* FILTER BAR & SEARCH - RESPONSIVE CAPSULE PILL DESIGN */}
      <section className="container-custom">
        <div className="glass-card p-3 sm:p-4 rounded-2xl sm:rounded-full bg-gray-50/90 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 max-w-5xl mx-auto">
          
          {/* Category Pill Filters */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto justify-center md:justify-start">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-extrabold font-display transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00C9B1] to-[#00BBA7] text-white shadow-md shadow-[#00BBA7]/25 scale-[1.02]'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-black border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box - Responsive & Clean Padding */}
          <div className="relative w-full md:w-72 lg:w-80 shrink-0">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00BBA7]/10 flex items-center justify-center text-[#00BBA7] pointer-events-none z-10">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              placeholder="Search 15 services (e.g. SEO, CRM)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 rounded-full bg-white border border-gray-300 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00BBA7] focus:ring-2 focus:ring-[#00BBA7]/20 shadow-sm transition-all"
            />
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-[#00BBA7]/50 group bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00BBA7] font-display">
                    {service.pillarName}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-black group-hover:text-[#00BBA7] transition-colors leading-snug">
                  {service.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-700 font-display">Key Deliverables:</div>
                  <div className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBA7] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button - Capsule Pill Circle with Embedded Circle Target */}
              <button
                onClick={() => openModal(service.id)}
                className="btn-primary group w-full justify-between"
              >
                <span>Request Scope for This Service</span>
                <span className="btn-circle-icon">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA - Full Container Width */}
      <section className="container-custom">
        <div className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-4 w-full">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-black">Not Sure Which Services You Need?</h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            Start with one of our fixed-price Offers or tell us your bottleneck and we'll map out a custom scope.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button 
              onClick={() => openModal()}
              className="btn-primary group"
            >
              <span>View Offers & Fixed Pricing</span>
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
