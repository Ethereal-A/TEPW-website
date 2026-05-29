import { MoveRight } from 'lucide-react';

export function BeforeAfter() {
  return (
    <section className="py-20 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy font-semibold text-sm mb-4">
            Proven Results
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-6">
            From Green & Grimy to Look-Like-New.
          </h2>
          <p className="text-lg text-gray-700">
            Seeing is believing. See how a professional exterior wash instantly restores value and pride to your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Example 1 */}
          <div className="bg-white p-4 rounded shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full bg-gray-200 aspect-[4/3] rounded overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#3a443a] opacity-80 mix-blend-multiply flex items-center justify-center">
                 <span className="text-white/60 font-medium">Dirty Driveway Image Placeholder</span>
              </div>
              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-sm font-bold rounded">BEFORE</div>
            </div>
            
            <div className="hidden md:flex bg-brand-light/10 p-3 rounded-full">
              <MoveRight className="w-6 h-6 text-brand-light" />
            </div>

            <div className="flex-1 w-full bg-gray-200 aspect-[4/3] rounded overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#e0e0db] flex items-center justify-center">
                 <span className="text-gray-500 font-medium text-center px-4">Clean Driveway Image Placeholder</span>
              </div>
               <div className="absolute top-4 right-4 bg-brand-light text-white px-3 py-1 text-sm font-bold rounded">AFTER</div>
            </div>
          </div>
          
           {/* Example 2 */}
           <div className="bg-white p-4 rounded shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full bg-gray-200 aspect-[4/3] rounded overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#4a544a] opacity-80 mix-blend-multiply flex items-center justify-center text-center p-4">
                 <span className="text-white/60 font-medium">Algae Siding Image Placeholder</span>
              </div>
              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-sm font-bold rounded">BEFORE</div>
            </div>
            
            <div className="hidden md:flex bg-brand-light/10 p-3 rounded-full">
              <MoveRight className="w-6 h-6 text-brand-light" />
            </div>

            <div className="flex-1 w-full bg-gray-200 aspect-[4/3] rounded overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#fbfbfb] flex items-center justify-center text-center p-4">
                 <span className="text-gray-500 font-medium">Clean Siding Image Placeholder</span>
              </div>
               <div className="absolute top-4 right-4 bg-brand-light text-white px-3 py-1 text-sm font-bold rounded">AFTER</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
