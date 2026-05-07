import { MoveRight } from 'lucide-react';

export function BeforeAfterCard() {
  return (
    <div id="results" className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-100">
       <h2 className="font-display text-sm font-bold text-brand-navy uppercase tracking-[0.2em] mb-8">
        Real Transformations
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* BEFORE */}
        <div className="flex-1 w-full bg-gray-200 aspect-[4/3] rounded-2xl overflow-hidden relative">
          <img 
            src="/images/driveway-before.png" 
            alt="Dirty driveway before power washing"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-brand-navy text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">Before</div>
        </div>
        
        <div className="hidden md:flex flex-shrink-0">
          <MoveRight className="w-8 h-8 text-gray-300" />
        </div>

        {/* AFTER */}
        <div className="flex-1 w-full bg-gray-200 aspect-[4/3] rounded-2xl overflow-hidden relative">
          <img 
            src="/images/driveway-after.png" 
            alt="Clean driveway after power washing"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#e32828] text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">After</div>
        </div>
      </div>
    </div>
  );
}
