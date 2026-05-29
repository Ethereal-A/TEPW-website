import React from 'react';

const faqs = [
  {
    q: 'What surfaces can you clean?',
    a: 'We clean almost all exterior surfaces including concrete driveways, brick siding, vinyl siding, stucco, wooden fences, composite decking, sidewalks, and patios.'
  },
  {
    q: 'Is pressure washing safe for my home?',
    a: 'It depends on the surface! High pressure is safe for concrete, but we use a specialized "Soft Washing" method with safe, eco-friendly detergents to gently clean siding, roofs, and delicate areas without risking damage.'
  },
  {
    q: 'How long does a typical service take?',
    a: 'Most residential jobs (like a standard driveway or house wash) take between 2 to 4 hours. We work efficiently to minimize disruption to your day.'
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes, absolutely! Just request a quote online or give us a call, and we will provide a clear, upfront estimate with no hidden fees.'
  },
  {
    q: 'Are you insured?',
    a: 'Yes. We are a fully insured professional cleaning company. We prioritize safety and protect your property and our workers at all times.'
  },
  {
    q: 'Do I need to be home for the service?',
    a: 'No, as long as we have access to a working exterior water spigot and the windows and doors are securely closed, you can go about your day while we bring the curb appeal back.'
  }
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-24 bg-brand-cream/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-navy mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-brand-navy mb-2">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
