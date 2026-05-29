import { Droplets } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-transparent py-8 text-center text-brand-navy/60">
      <div className="flex flex-col items-center">
        <div className="flex gap-4 text-xs font-bold uppercase tracking-widest mb-4">
          <a href="#quote" className="hover:text-brand-navy transition-colors">Request Quote</a>
          <span>&bull;</span>
          <a href="tel:8323617856" className="hover:text-brand-navy transition-colors">Call (832) 361-7856</a>
        </div>
        
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Texas Express Power Washing. Charlotte, NC.
        </p>
      </div>
    </footer>
  );
}
