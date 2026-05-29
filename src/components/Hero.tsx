import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative bg-brand-navy text-white overflow-hidden">
      {/* Background pattern / overlay placeholder */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-light to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-semibold text-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
            Serving Charlotte, NC exclusively this summer!
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 uppercase tracking-tight text-white">
            Texas Grit.<br /> <span className="text-brand-light">Charlotte Shine.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 font-normal mb-10 max-w-2xl leading-relaxed">
            Fast, reliable, and professional exterior cleaning. We're bringing our legendary Texas-sized clean to Charlotte for a limited time. Don’t let dirt, grime, and algae ruin your property value.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <a 
              href="#quote" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white text-lg font-bold px-8 py-4 rounded transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(196,32,38,0.3)]"
            >
              Get a Free Estimate <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:5551234567" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/10 text-white text-lg font-bold px-8 py-4 rounded transition-all"
            >
              Call Us Now
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm font-medium text-brand-cream/80">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-light text-brand-light" />
                ))}
              </div>
              <span className="ml-2">5-Star Rated Service</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-light" />
              <span>Fully Insured & Local</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
