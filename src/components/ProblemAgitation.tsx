import { AlertTriangle, Droplets, TrendingDown } from 'lucide-react';

export function ProblemAgitation() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-6">
            Is Your Property Sending the Wrong Message?
          </h2>
          <p className="text-xl text-gray-600">
            Dirt, mold, algae, and persistent stains do more than just look bad. They quietly eat away at your home's exterior and sink your property value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-cream/50 p-8 rounded-lg border border-brand-cream text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase text-brand-navy mb-3">Lower Property Value</h3>
            <p className="text-gray-600">
              A dirty exterior immediately signals neglect. Curb appeal is the single biggest factor in home valuation—don't let mildew rob your equity.
            </p>
          </div>

          <div className="bg-brand-cream/50 p-8 rounded-lg border border-brand-cream text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-brand-navy" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase text-brand-navy mb-3">Permanent Damage</h3>
            <p className="text-gray-600">
              Algae and mold aren't just ugly stains; they are living organisms feasting on your siding, roofing, and concrete, causing premature decay.
            </p>
          </div>

          <div className="bg-brand-cream/50 p-8 rounded-lg border border-brand-cream text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-brand-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Droplets className="w-8 h-8 text-brand-light" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase text-brand-navy mb-3">Slippery Hazards</h3>
            <p className="text-gray-600">
              Mildew-covered driveways, sidewalks, and patios become slick and dangerous every time it rains. Protect your family and guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
