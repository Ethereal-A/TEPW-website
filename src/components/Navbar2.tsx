import React from 'react';
import { BookingButton } from './BookingButton';

export function Navbar2() {
  return (
    <nav className="w-full bg-white rounded-3xl shrink-0 border border-gray-100 shadow-sm flex items-center justify-between px-4 sm:px-6 py-4">
      {/* Logo block — "POWER WASHING" is now dominant, matching the flyer */}
      <div className="flex items-center gap-3">
        <div className="bg-brand-navy text-white font-display font-bold italic px-3 py-1 rounded text-2xl flex items-center tracking-tight">
          TEPW
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-sans font-semibold text-[11px] sm:text-[13px] uppercase tracking-wide text-brand-navy mb-0.5 sm:mb-1">
            Texas Express
          </span>
          <span className="text-brand-red font-display font-bold text-base sm:text-xl tracking-wider uppercase leading-none">
            Power Washing
          </span>
        </div>
      </div>

      {/* Desktop right side: tappable phone + Book Now */}
      <div className="hidden md:flex items-center gap-5">
        <div className="text-right flex flex-col items-end">
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
            Serving Charlotte NC
          </span>
          <a
            href="tel:8323617856"
            className="text-brand-navy font-bold text-xl hover:text-brand-red transition-colors font-display tracking-tight"
          >
            832-361-7856
          </a>
        </div>

        <BookingButton size="sm" source="navbar-desktop" />
      </div>

      {/* Mobile right side: just Book Now */}
      <div className="flex md:hidden">
        <BookingButton size="sm" source="navbar-mobile" label="Book" />
      </div>
    </nav>
  );
}