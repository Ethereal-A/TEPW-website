const servicesList = [
  'Driveway Cleaning',
  'Soft Wash House Siding',
  'Patio & Deck Wash',
  'Window Cleaning',
  'Commercial Exteriors',
  'Sidewalk & Walkways'
];

export function ServicesCard() {
  return (
    <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col justify-center h-full">
      <h2 className="font-display text-sm font-bold text-brand-navy uppercase tracking-[0.2em] mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
        {servicesList.map((svc, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
            <span className="font-bold text-sm text-brand-navy tracking-tight">{svc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
