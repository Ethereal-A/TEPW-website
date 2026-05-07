export function TestimonialsCard() {
  return (
    <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-100 text-center flex flex-col justify-center items-center">
       <h2 className="font-display text-sm font-bold text-brand-navy uppercase tracking-[0.2em] mb-8">
        Proven & Trusted
      </h2>
      <p className="text-xl md:text-2xl font-display font-medium leading-relaxed italic text-brand-navy mb-8 max-w-2xl">
        "Texas Express completely transformed our patio and driveway. They showed up early, worked incredibly hard, and the concrete looks brighter than the day we bought the house. Highly recommend!"
      </p>
      <div className="flex flex-col items-center">
        <span className="font-bold text-brand-navy mb-1">— Michael T.</span>
        <span className="text-sm text-gray-500 uppercase tracking-widest">Houston, TX</span>
      </div>
    </div>
  );
}
