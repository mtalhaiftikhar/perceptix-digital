import React, { useState } from 'react';
import { ArrowRight, Clock, X } from 'lucide-react';

export default function Blog({ setActivePage }) {
  const [activeCat, setActiveCat] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Web Development', 'SEO', 'Paid Ads', 'Automation', 'Case Studies'];

  const articles = [
    {
      id: 1,
      title: "Why Most Small Business Websites Suffer From the 'Fragmentation Problem'",
      category: "Web Development",
      readTime: "5 min read",
      date: "August 2026",
      snippet: "A designer builds the site. A separate freelancer runs the ads. Nobody owns the follow-up. Here is how fragmented vendor teams quietly kill conversion rates.",
      content: `
### The Root Cause of Low Website ROI

Most business owners assume their website failure is due to bad design or low traffic. In 90% of technical audits we perform, the real bottleneck is vendor fragmentation.

1. **The Designer's View**: Focuses solely on visual aesthetics, often bundling bloated heavy animations and 10MB uncompressed assets that destroy load speed.
2. **The Ad Manager's View**: Drives expensive traffic to a generic homepage that has no conversion hook or intake mechanism.
3. **The Follow-Up Void**: Leads arrive in an unmonitored inbox and sit for 48 hours before anyone calls them back.

### The Solution: One Integrated System

When web development, SEO structure, ad routing, and lead automation are designed under one roof by a single accountable team, conversion rates triple without doubling ad spend.
      `
    },
    {
      id: 2,
      title: "How We Optimized a Local Service Site Load Time From 4.8s to 0.9s",
      category: "Case Studies",
      readTime: "4 min read",
      date: "July 2026",
      snippet: "A deep dive into site speed fixes: server-level caching, WebP image compression, and script deferral for local lead engines.",
      content: `
### The Challenge

Every second your site takes to load is a visitor you are paying to lose. A local service provider came to us with a 4.8-second mobile load time and a 72% bounce rate on Google Ads.

### What We Fixed

- **Image Compression**: Converted 45 unoptimized PNG assets into modern WebP format, reducing asset payload by 82%.
- **DOM & Script Cleanup**: Removed 14 redundant plugin scripts and configured delayed execution for non-critical analytics.
- **Server Caching**: Implemented page-level server caching and CDN routing.

### The Results

Load time dropped from **4.8s to 0.9s**, Google PageSpeed score jumped from 34 to 98, and cost per qualified lead decreased by 41%.
      `
    },
    {
      id: 3,
      title: "AI Automation vs. Traditional Lead Follow-Up: What Actually Works",
      category: "Automation",
      readTime: "6 min read",
      date: "July 2026",
      snippet: "Why speed to lead is the single highest leverage metric in 2026, and how to automate lead intake without sounding like a cold robot.",
      content: `
### The 5-Minute Window Rule

Studies show that reaching out to a lead within 5 minutes of form submission increases conversion likelihood by over 900%. Yet most local businesses take an average of 14 hours to respond.

### Building Human-Feeling Automations

Automating follow-up does not mean sending spammy robotic blasts. We build workflows that:
- Trigger instant SMS/Email notifications to your staff.
- Send personalized, context-aware responses confirming appointment availability.
- Automatically log lead source and status directly inside your CRM (Zoho, GoHighLevel, HubSpot).
      `
    },
    {
      id: 4,
      title: "Google Ads Cost Per Lead: Stop Paying For Clicks That Don't Convert",
      category: "Paid Ads",
      readTime: "5 min read",
      date: "June 2026",
      snippet: "How negative keyword audits, targeted landing pages, and proper conversion tracking lower ad waste.",
      content: `
### The Ad Budget Trap

Most Google Ads agencies measure success by impressions or total click count. But clicks don't pay your bills — qualified inquiries do.

### Our Strategy

1. **Dedicated Landing Pages**: Never send paid ad traffic to a multi-nav homepage. Use dedicated conversion landing pages (like our $500 Local Lead Engine).
2. **Negative Keyword Scrubbing**: Filter out low-intent searches ('free', 'jobs', 'DIY', 'course').
3. **Conversion API Tracking**: Track actual form submissions and phone calls directly back to specific ad keywords.
      `
    }
  ];

  const filteredArticles = activeCat === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCat);

  return (
    <div className="space-y-12 sm:space-y-16 py-8 bg-white text-gray-900">
      
      {/* Page Intro - Perfectly Centered */}
      <section className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <span className="badge-teal">Insights & Practical Field Notes</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            Notes on Web Development, SEO, and Automation — Without the Filler
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Practical breakdowns of what we're seeing work (and not work) in websites, paid ads, SEO, and automation for local and growing businesses.
          </p>
        </div>
      </section>

      {/* Category Pills - Capsule Pill Circle Design Centered */}
      <section className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 pb-4 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold font-display transition-all ${
                activeCat === cat
                  ? 'bg-gradient-to-r from-[#00C9B1] to-[#00BBA7] text-white shadow-md shadow-[#00BBA7]/25 scale-[1.02]'
                  : 'bg-gray-100 text-gray-700 hover:bg-white hover:border-[#00BBA7] border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article Cards Grid */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6 group hover:border-[#00BBA7]/50 bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span className="badge-teal">{article.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#00BBA7]" /> {article.readTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-black group-hover:text-[#00BBA7] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {article.snippet}
                </p>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="btn-secondary group justify-between w-full"
              >
                <span>Read Breakdown</span>
                <span className="btn-circle-icon">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Article Modal Reader */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-6 md:p-8 max-h-[85vh] overflow-y-auto space-y-6 text-gray-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <span className="badge-teal mb-1">{selectedArticle.category}</span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-black">{selectedArticle.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="prose prose-sm text-gray-700 space-y-4 leading-relaxed">
              {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                <div key={idx}>
                  {paragraph.startsWith('###') ? (
                    <h4 className="font-display text-base font-bold text-[#00BBA7] mt-4 mb-2">{paragraph.replace('### ', '')}</h4>
                  ) : (
                    <p className="text-xs sm:text-sm">{paragraph}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn-primary"
              >
                <span>Close Article</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
