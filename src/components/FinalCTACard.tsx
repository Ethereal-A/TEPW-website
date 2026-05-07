export function FinalCTACard() {
  return (
    <div id="quote" className="bg-brand-navy text-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-800 flex flex-col md:flex-row gap-12 items-center justify-between">
      <div className="flex-1 max-w-xl">
        <h2 className="font-display text-4xl sm:text-5xl font-bold italic mb-4 tracking-tight">
          Ready for a clean home?
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Fill out the form to get a rapid, no-obligation quote. We're booking up fast for the Charlotte summer season.
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" className="w-full px-4 py-4 bg-[#144A7C] border border-[#2061A0] rounded-xl focus:ring-2 focus:ring-brand-light focus:outline-none text-white placeholder-white/40" placeholder="Your Name" />
            <input type="tel" className="w-full px-4 py-4 bg-[#144A7C] border border-[#2061A0] rounded-xl focus:ring-2 focus:ring-brand-light focus:outline-none text-white placeholder-white/40" placeholder="Phone Number" />
          </div>
          <input type="text" className="w-full px-4 py-4 bg-[#144A7C] border border-[#2061A0] rounded-xl focus:ring-2 focus:ring-brand-light focus:outline-none text-white placeholder-white/40" placeholder="Service Address or ZIP Code" />
          <button className="w-full bg-[#E93B32] hover:bg-red-600 text-white font-bold text-lg px-8 py-5 rounded-xl uppercase tracking-wider transition-colors shadow-[0_4px_14px_0_rgba(233,59,50,0.39)]">
            Send My Estimate
          </button>
        </form>
      </div>

      <div className="hidden lg:flex flex-1 justify-center relative">
        <div className="w-64 h-64 border-8 border-[#144A7C] rounded-full flex flex-col items-center justify-center p-8 bg-[#0B3A63] z-10 shadow-2xl">
           <span className="text-brand-light font-bold text-sm tracking-widest uppercase mb-2">Book Now</span>
           <span className="font-display text-3xl font-bold tracking-tight text-center leading-tight">LIMITED<br/>SLOTS</span>
        </div>
      </div>
    </div>
  );
}
