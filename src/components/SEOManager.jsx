import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoMetaData = {
  '/': {
    title: 'Perceptix Digital | Full-Stack Web Development, Growth & AI Systems',
    description: 'Perceptix Digital is an integrated digital agency providing custom web development, search engine optimization, paid advertising, and automated lead management systems under one accountable team.'
  },
  '/about': {
    title: 'About Us | Perceptix Digital',
    description: 'Learn about Perceptix Digital’s dual-hub operational model combining senior US client strategy with full-time, in-house technical execution to eliminate vendor fragmentation.'
  },
  '/services': {
    title: 'Specialized Capabilities & Engineering Services | Perceptix Digital',
    description: 'Explore our 15 specialized capabilities across custom WordPress development, Shopify e-commerce, technical SEO, Google Ads, and AI-driven lead automation workflows.'
  },
  '/offers': {
    title: 'Fixed-Price Offers & Pre-Scoped Packages | Perceptix Digital',
    description: 'Review pre-packaged, fixed-price digital offers built around defined scopes. Clear deliverables, fixed pricing, and transparent timelines before any engagement begins.'
  },
  '/faq': {
    title: 'Frequently Asked Questions | Perceptix Digital',
    description: 'Clear answers regarding our agency structure, dual-hub delivery model, technology stack, project timelines, post-launch support, and fixed-price engagement options.'
  },
  '/blog': {
    title: 'Digital Engineering & Conversion Insights | Perceptix Digital',
    description: 'Practical field notes, case studies, and technical breakdowns on web performance optimization, lead funnel architecture, paid ad efficiency, and business automation.'
  },
  '/contact': {
    title: 'Contact Client Strategy Team | Perceptix Digital',
    description: 'Connect with our US Client Strategy team to discuss your digital presence, evaluate fixed-price packages, or define a custom technical project scope.'
  },
  '/legal': {
    title: 'Privacy Policy & Terms of Service | Perceptix Digital',
    description: 'Official privacy policy, data practices, and terms of service governing perceptixdigital.com and client service agreements.'
  }
};

export default function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = seoMetaData[pathname] || seoMetaData['/'];
    
    // Update Page Title
    document.title = meta.title;

    // Enforce Site "P" Brand Favicon universally on ALL pages
    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('type', 'image/svg+xml');
    faviconLink.setAttribute('href', '/favicon.svg');

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', meta.description);

    // Update OpenGraph Title & Description for Social Sharing
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', meta.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', meta.description);

    // Update Canonical URL for Search Engines
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    const currentUrl = `https://perceptixdigital.com${pathname === '/' ? '' : pathname}`;
    canonicalLink.setAttribute('href', currentUrl);

  }, [pathname]);

  return null;
}
