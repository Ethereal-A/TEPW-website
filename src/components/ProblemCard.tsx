export function ProblemCard() {
  return (
    <div className="bg-[#1A2332] text-white rounded-[2rem] p-8 lg:p-10 shadow-sm flex flex-col justify-center h-full overflow-hidden">
  {/* Image at the top */}
  <div className="relative -mx-8 -mt-8 mb-6 lg:-mx-10 lg:-mt-10 h-64">
    <img 
      src="/src/assets/images/algea-mildew.png" 
      alt="Algae and mildew on exterior surface"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#1A2332]/90"></div>
  </div>

  <div className="flex flex-col h-full justify-between">
    <h2 className="font-display text-sm font-bold text-brand-red uppercase tracking-[0.2em] mb-6">
      The Problem
    </h2>
    <p className="text-white/80 text-sm leading-relaxed">
      Mildew, oil, and grime aren't just ugly—they eat away at your property value and curb appeal. Stop letting a dirty exterior send the wrong message.
    </p>
  </div>
</div>
  );
}
