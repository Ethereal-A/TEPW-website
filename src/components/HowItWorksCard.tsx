export function HowItWorksCard() {
  return (
    <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col justify-center h-full">
      <h2 className="font-display text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
        How It Works
      </h2>
      <div className="flex flex-col space-y-5">
        <div className="flex items-center gap-4">
           <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold text-brand-navy shrink-0">1</div>
           <span className="font-bold text-brand-navy text-sm tracking-tight uppercase">Quick Quote</span>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold text-brand-navy shrink-0">2</div>
           <span className="font-bold text-brand-navy text-sm tracking-tight uppercase">Schedule Service</span>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold text-brand-navy shrink-0">3</div>
           <span className="font-bold text-brand-navy text-sm tracking-tight uppercase">Enjoy Clean Home</span>
        </div>
      </div>
    </div>
  );
}
