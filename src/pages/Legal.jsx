import React, { useState } from 'react';

export default function Legal() {
  const [tab, setTab] = useState('privacy');

  return (
    <div className="space-y-12 py-8 bg-white text-gray-900">
      
      {/* Header - Perfectly Centered */}
      <section className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <span className="badge-teal">Legal & Compliance Documentation</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-black">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Official policy terms governing the use of perceptixdigital.com and client service engagements.
          </p>
        </div>
      </section>

      {/* Tabs - Full Capsule Pill Circle Design Centered */}
      <section className="container-custom">
        <div className="flex items-center justify-center gap-2 border-b border-gray-200 pb-4 max-w-4xl mx-auto">
          <button
            onClick={() => setTab('privacy')}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold font-display transition-all ${
              tab === 'privacy'
                ? 'bg-gradient-to-r from-[#00C9B1] to-[#00BBA7] text-white shadow-md shadow-[#00BBA7]/25'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Privacy Policy
          </button>

          <button
            onClick={() => setTab('terms')}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold font-display transition-all ${
              tab === 'terms'
                ? 'bg-gradient-to-r from-[#00C9B1] to-[#00BBA7] text-white shadow-md shadow-[#00BBA7]/25'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Terms of Service
          </button>
        </div>
      </section>

      {/* Document View */}
      <section className="container-custom">
        <div className="glass-card p-6 sm:p-10 md:p-12 space-y-8 max-w-4xl mx-auto bg-white">
          {tab === 'privacy' ? (
            <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="font-display text-xl font-bold text-black mb-1">Privacy Policy</h2>
                <div className="text-xs text-gray-500 font-medium">Last updated: August 2026</div>
              </div>

              <p>
                Perceptix Digital ("we," "us," or "our") operates perceptixdigital.com (the "Site"). This Privacy Policy explains what information we collect, how we use it, and the choices you have.
              </p>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">1. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Contact information you submit through forms (name, email, phone, company)</li>
                  <li>Project details shared during scoping or onboarding</li>
                  <li>Basic usage data collected through analytics tools (e.g., Google Analytics)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">2. How We Use Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>To respond to inquiries and deliver requested services</li>
                  <li>To improve our website and service offerings</li>
                  <li>To send project-related or, with consent, marketing communications</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">3. Sharing of Information</h3>
                <p>
                  We do not sell personal information. We may share information with trusted service providers (e.g., hosting, CRM, email tools) solely to operate our business.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">4. Your Choices</h3>
                <p>
                  You may request access to, correction of, or deletion of your personal information by contacting{' '}
                  <a href="mailto:hello@perceptixdigital.com" className="text-[#00BBA7] font-bold hover:underline">
                    hello@perceptixdigital.com
                  </a>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="font-display text-xl font-bold text-black mb-1">Terms of Service</h2>
                <div className="text-xs text-gray-500 font-medium">Last updated: August 2026</div>
              </div>

              <p>
                By engaging Perceptix Digital ("we," "us") for services or using perceptixdigital.com, you agree to the following terms:
              </p>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">1. Services</h3>
                <p>
                  Scope, deliverables, timelines, and pricing for each engagement are defined in a written proposal, invoice, or Offer description prior to work beginning.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">2. Payment</h3>
                <p>
                  Payment terms (deposits, milestones, or full payment) are specified per project. Fixed-price Offers require payment as stated on the relevant Offer page.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">3. Revisions</h3>
                <p>
                  Each engagement includes a defined revision scope, communicated before work begins. Work beyond agreed scope may incur additional cost.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">4. Ownership</h3>
                <p>
                  Upon full payment, final deliverables (e.g., website files, designs) transfer to the client, excluding any third-party tools, licenses, or platforms used to build them.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">5. Limitation of Liability</h3>
                <p>
                  Perceptix Digital is not liable for indirect, incidental, or consequential damages arising from use of our services, to the maximum extent permitted by law.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-black">6. Termination</h3>
                <p>
                  Either party may terminate an ongoing engagement with written notice as specified in the project agreement. Completed work up to the termination date remains payable.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-gray-200">
                <h3 className="font-display text-base font-bold text-black">Contact</h3>
                <p>
                  Questions about these terms: {' '}
                  <a href="mailto:hello@perceptixdigital.com" className="text-[#00BBA7] font-bold hover:underline">
                    hello@perceptixdigital.com
                  </a>.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
