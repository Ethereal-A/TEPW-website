import { ShieldCheck, Zap, HeartHandshake, Map, Wrench, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    title: 'Fast & Responsive',
    desc: 'No ghosting. When you request a quote, we respond fast. Your time is valuable.',
    icon: Zap
  },
  {
    title: 'Professional Equipment',
    desc: 'We use commercial-grade pressure washers and soft-wash systems for a superior, lasting clean.',
    icon: Wrench
  },
  {
    title: 'Safe Soft-Washing',
    desc: 'We know when to use pressure and when not to. We protect your siding and landscaping.',
    icon: ShieldCheck
  },
  {
    title: 'Local Texas Work Ethic',
    desc: 'Brought directly to Charlotte. We believe in earning our keep through relentless hard work.',
    icon: Map
  },
  {
    title: 'Affordable Estimates',
    desc: 'Upfront, transparent pricing with zero surprise fees or upcharges.',
    icon: HeartHandshake
  },
  {
    title: '100% Satisfaction',
    desc: 'We treat your property like our own. We aren\'t finished until you are thrilled with the result.',
    icon: ThumbsUp
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Why We're the Best Call You'll Make Today.
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Anyone can rent a pressure washer—but not everyone knows how to safely remove stubborn grime without leaving permanent wand marks or blowing the seal on your windows. 
            </p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              At Texas Express Power Washing, we bring top-tier equipment, trained professionals, and a commitment to doing the job right the very first time.
            </p>
            <a 
              href="#quote" 
              className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-4 rounded transition-colors shadow-lg shadow-brand-red/20"
            >
              Request My Quote
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded hover:bg-white/10 transition-colors">
                <b.icon className="w-8 h-8 text-brand-light mb-4" />
                <h3 className="font-display font-bold text-xl uppercase mb-2 text-white">{b.title}</h3>
                <p className="text-sm text-white/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
