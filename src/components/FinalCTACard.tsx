import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Phone } from 'lucide-react';
import { BOOKING_URL, BookingButton } from './BookingButton';

export function FinalCTACard() {
  return (
    <div className="bg-brand-navy text-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-800 flex flex-col md:flex-row gap-12 items-center justify-between">
      {/* LEFT COLUMN: Headline + value props + phone */}
      <div className="flex-1 max-w-xl w-full">
        <h2 className="font-display text-4xl sm:text-5xl font-bold italic mb-4 tracking-tight">
          Ready for a clean home?
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Book online in under 60 seconds. We'll handle the rest.
        </p>

        {/* Value prop list */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand-light flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Upfront flat-rate pricing.</span>
              <span className="text-white/70"> No surprise charges, ever.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand-light flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Commercial hot-water equipment.</span>
              <span className="text-white/70"> Removes what garden hoses can't.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand-light flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Most driveways done in under an hour.</span>
              <span className="text-white/70"> In and out, same day.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand-light flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Satisfaction guaranteed.</span>
              <span className="text-white/70"> We don't leave until you're happy.</span>
            </div>
          </div>
        </div>

        {/* Phone CTA — for customers who prefer to call */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-2">
            Prefer to talk?
          </p>
          <a
            href="tel:8323617856"
            className="inline-flex items-center gap-3 text-white hover:text-brand-light transition-colors group"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            <span className="font-display text-2xl font-bold tracking-tight">
              832-361-7856
            </span>
          </a>
        </div>

        {/* Mobile-only: Book Online button + terms agreement (since circle is desktop-only) */}
        <div className="lg:hidden mt-6 pt-6 border-t border-white/10">
          <BookingButton
            size="lg"
            fullWidth
            source="final-cta-mobile"
            label="Book Online Instantly"
          />
          <p className="text-white/40 text-xs text-center mt-3 leading-relaxed">
            By booking, you agree to our{' '}
            <a
              href="/terms"
              className="underline hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Functional booking circle (desktop only) */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center gap-3">
        <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
          Book in 60 seconds
        </p>
        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="w-64 h-64 border-8 border-[#144A7C] hover:border-[#E93B32] rounded-full flex flex-col items-center justify-center p-8 bg-[#0B3A63] hover:bg-[#E93B32] z-10 shadow-2xl transition-colors cursor-pointer group focus:outline-none focus:ring-4 focus:ring-brand-light/50"
          aria-label="Book a pressure washing appointment online"
        >
          <Calendar
            size={36}
            strokeWidth={2}
            className="text-brand-light group-hover:text-white mb-2 transition-colors"
          />
          <span className="text-brand-light group-hover:text-white font-bold text-sm tracking-widest uppercase mb-1 transition-colors">
            Book Online
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-center leading-tight">
            PICK<br />YOUR TIME
          </span>
        </motion.a>
        <p className="text-white/40 text-xs uppercase tracking-widest text-center">
          Pick service · Pay deposit · Done
        </p>
        <p className="text-white/40 text-xs text-center mt-1 leading-relaxed max-w-[16rem]">
          By booking, you agree to our{' '}
          <a
            href="/terms"
            className="underline hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
}