import { Home, Droplets, MapPin, Building, Fence, Key } from 'lucide-react';

const services = [
  {
    title: 'Driveway Cleaning',
    desc: 'Blast away oil, dirt, and tire marks. Instantly brighten your concrete and restore that clean, welcoming entrance.',
    icon: MapPin
  },
  {
    title: 'House Soft Washing',
    desc: 'Safe, low-pressure chemical washing to kill mold and algae without damaging your siding, stucco, or brick.',
    icon: Home
  },
  {
    title: 'Patio & Deck Cleaning',
    desc: 'Prepare for summer BBQs. We strip away grime from wood, composite, and concrete patios safely and quickly.',
    icon: Droplets
  },
  {
    title: 'Window Cleaning',
    desc: 'Breathe new life into greying, algae-covered windows. We handle most windows at most heights.',
    icon: Window
  },
  {
    title: 'Sidewalk Cleaning',
    desc: 'Improve the safety and curb appeal of your property line. No more slippery, green-tinted walkways.',
    icon: Key
  },
  {
    title: 'Commercial washing',
    desc: 'Storefronts, drive-thrus, and commercial properties. We make sure your business gives a flawless first impression.',
    icon: Building
  }
];

export function Services() {
  return (
    <section className="py-20 lg:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy font-semibold text-sm mb-4">
            Our Expertise
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-6">
            Complete Exterior Cleaning
          </h2>
          <p className="text-lg text-gray-700">
            From tough concrete stains to delicate siding, our specialized equipment and expertise guarantee a flawless clean without the damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow rounded-sm border-t-4 border-t-brand-light">
              <div className="w-12 h-12 bg-brand-light/10 text-brand-light flex items-center justify-center rounded mb-6">
                <svc.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-brand-navy mb-3">{svc.title}</h3>
              <p className="text-gray-600 line-clamp-3">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#quote" 
            className="inline-flex items-center justify-center bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-lg px-8 py-4 rounded transition-colors"
          >
            Get a Custom Quote for Your Home
          </a>
        </div>
      </div>
    </section>
  );
}
