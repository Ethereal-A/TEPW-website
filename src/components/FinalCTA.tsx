import { PhoneCall, CalendarCheck } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="quote" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-red to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6 leading-tight">
          Don't Wait Until It's Too Late. <br />
          <span className="text-brand-light">Get Summer-Ready Now.</span>
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          We're only in Charlotte for a limited time. Lock in your reliable, local Texas service before our schedule fills up. 
        </p>

        <div className="bg-white text-brand-navy p-8 sm:p-12 rounded-lg shadow-2xl max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold uppercase mb-4 text-center">Request Your Free Estimate</h3>
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-brand-light focus:outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-brand-light focus:outline-none" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Service Address / ZIP</label>
              <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-brand-light focus:outline-none" placeholder="Charlotte, NC" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">What do you need washed?</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-brand-light focus:outline-none text-gray-700">
                <option>House Siding (Soft Wash)</option>
                <option>Driveway / Sidewalk</option>
                <option>Patio / Deck / Fence</option>
                <option>Commercial Property</option>
                <option>Full Property Package</option>
              </select>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xl px-8 py-4 rounded transition-colors mt-6">
              <CalendarCheck className="w-6 h-6" /> Get My Quote Right Now
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">We respect your privacy. No spam, ever.</p>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 mb-2 font-bold uppercase text-sm tracking-wider">Or Give Us A Call Directly</p>
          <a href="tel:5551234567" className="inline-flex items-center gap-2 text-3xl font-display font-bold hover:text-brand-light transition-colors">
            <PhoneCall className="w-8 h-8" />
            (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
