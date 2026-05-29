import { CheckCircle2, ArrowRight } from 'lucide-react';
import { BookingButton } from './BookingButton';

export function HeroCard() {
  return (
    <div className="bg-white rounded-[2rem] p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden h-full flex flex-col justify-center">
      {/* Background Star Watermark */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[600px] h-[600px] text-brand-navy">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="inline-block bg-[#F0F4F8] text-[#c21c15] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
          Summer Exclusive: Charlotte, NC
        </div>
        
        <h1 className="font-display text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.05] italic mb-6 text-brand-navy tracking-tight">
          Texas Grit. Charlotte Shine.<br />
          <span className="text-[#1c1c1f]">The Ultimate Home Refresh.</span>
        </h1>
        
        <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
          Professional exterior cleaning that restores your property's value in hours. Book online in under 60 seconds — pick your service, pick your time, done.
        </p>

        {/* Single primary CTA */}
        <div className="mb-6">
          <BookingButton size="lg" source="hero-primary" label="Book Online" />
        </div>

        {/* Tertiary link: proof */}
        <a
          href="#results"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-brand-navy font-semibold text-sm uppercase tracking-widest mb-10 transition-colors group"
        >
          See Before &amp; After Results
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="flex flex-wrap gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-500/10" />
            5-Star Local Service
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-500/10" />
            Eco-friendly
          </div>
        </div>
      </div>
    </div>
  );
}