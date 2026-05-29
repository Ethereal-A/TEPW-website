import { ClipboardSignature, Calculator, CalendarClock, Sparkles } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Request a Quote',
    desc: 'Fill out our simple form or give us a call. It takes less than 60 seconds.',
    icon: ClipboardSignature
  },
  {
    num: '02',
    title: 'Receive Estimate',
    desc: 'We provide a transparent, competitively priced estimate based on your exact needs.',
    icon: Calculator
  },
  {
    num: '03',
    title: 'Schedule Service',
    desc: 'Pick a time that works for you. We show up on time and ready to work.',
    icon: CalendarClock
  },
  {
    num: '04',
    title: 'Enjoy a Clean Property',
    desc: 'We wash away the grime, leaving you with instant curb appeal and peace of mind.',
    icon: Sparkles
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-24 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Getting your home expertly washed has never been easier. Four simple steps to massive curb appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-[2px] bg-brand-cream -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-brand-cream text-brand-navy rounded-full flex flex-col items-center justify-center mb-6 relative z-10 transition-colors group-hover:border-brand-light">
                <span className="text-sm font-bold opacity-30 mt-1">{step.num}</span>
                <step.icon className="w-8 h-8 text-brand-light -mt-1" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-brand-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
