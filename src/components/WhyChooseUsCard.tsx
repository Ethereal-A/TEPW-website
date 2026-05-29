import { Check, Star } from 'lucide-react';

const reasons = [
  {
    title: 'FAST RESPONSE',
    desc: 'Quotes in 24 hours or less.'
  },
  {
    title: 'SAFE TECH',
    desc: 'Low-pressure soft washing options.'
  },
  {
    title: 'CHEMICAL CLEANING',
    desc: 'Safe, effective solutions for old and hardened concrete stains.'
  },
  {
    title: 'LOCAL PRIDE',
    desc: 'Texas-born reliability brought to Charlotte.'
  }
];

export function WhyChooseUsCard() {
  return (
    <div className="bg-[#0B3A63] text-white rounded-[2rem] p-8 lg:p-12 h-full shadow-sm flex flex-col justify-center">
      <h2 className="font-display text-2xl font-bold mb-10 flex items-center gap-3">
        <Star className="w-6 h-6 fill-brand-red text-brand-red" />
        Why Choose Us?
      </h2>
      
      <div className="space-y-8">
        {reasons.map((r, i) => (
          <div key={i} className="flex gap-4">
            <div className="bg-white/10 rounded flex items-center justify-center w-6 h-6 shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-white">{r.title}</h3>
              <p className="text-white/60 text-sm leading-snug">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
