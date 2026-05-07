import { Droplets, PhoneCall, CheckCircle } from 'lucide-react';
import React from 'react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-navy text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="h-8 w-8 text-brand-light" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl leading-none uppercase tracking-wide">
                Texas Express
              </span>
              <span className="text-brand-light font-display font-medium text-xs tracking-[0.2em] uppercase">
                Power Washing
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-white/80 font-medium text-sm flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-red" />
              Serving Charlotte, NC This Summer
            </span>
          </div>

          <div className="flex items-center">
            <a
              href="#quote"
              className="hidden sm:flex bg-brand-red hover:bg-brand-red/90 text-white px-6 py-2.5 rounded font-bold transition-colors items-center gap-2"
            >
              <PhoneCall className="h-4 w-4" />
              Get a Free Estimate
            </a>
            <a
              href="#quote"
              className="flex sm:hidden p-2 text-brand-light hover:text-white transition-colors"
            >
              <PhoneCall className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
