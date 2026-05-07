import React from 'react';

export function Navbar2() {
  return (
    <nav className="w-full bg-white rounded-3xl shrink-0 border border-gray-100 shadow-sm flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="bg-brand-navy text-white font-display font-black italic px-3 py-1 rounded text-2xl flex items-center tracking-tighter">
          TEPW
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-display font-medium text-[15px] uppercase tracking-tight text-brand-navy">
            Texas Express
          </span>
          <span className="text-brand-red font-bold text-[8px] tracking-[0.25em] uppercase">
             Power Washing
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="text-right flex flex-col items-end">
          <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
            Serving Charlotte NC
          </span>
          <span className="text-brand-navy font-bold text-xl hover:text-brand-red transition-colors font-display tracking-tight">
            832-361-7856
          </span>
        </div>
        <a
          href="#quote"
          className="bg-[#E93B32] hover:bg-red-600 shadow-[0_4px_10px_0_rgba(233,59,50,0.3)] text-white px-6 py-3.5 rounded-lg font-bold uppercase tracking-wider transition-colors text-xs"
        >
          Get a Free Estimate
        </a>
      </div>
      
      <div className="flex md:hidden">
        <a href="#quote" className="bg-[#E93B32] text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider">
          Quote
        </a>
      </div>
    </nav>
  );
}
