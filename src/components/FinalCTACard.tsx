import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { BOOKING_URL, BookingButton } from './BookingButton';

export function FinalCTACard() {
  return (
    <div
      id="quote"
      className="bg-brand-navy text-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-800 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between"
    >
      {/* LEFT COLUMN: Quote form for variable-price jobs */}
      <div className="flex-1 max-w-xl w-full">
        <h2 className="font-display text-4xl sm:text-5xl font-bold italic mb-4 tracking-tight">
          Ready for a clean home?
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Need a custom quote? Fill out the form and we'll get back within an hour. Booking up fast for the Charlotte summer season.
        </p>

        {/*
          ⚠️ TODO: This form does NOT submit data anywhere yet.
          Wire it up before going live — options:
          - Formspree (formspree.io) — easiest, ~5 min setup, free for 50/mo
          - Web3Forms (web3forms.com) — also free, no signup required
          - EmailJS (emailjs.com) — sends straight to your inbox
          - Your own Express backend (you have express in deps)
        */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              name="name"
              className="w-full px-4 py-4 bg-[#144A7C] border border-[#2061A0] rounded-xl focus:ring-2 focus:ring-brand-light focus:outline-none text-white placeholder-white/40"
              placeholder="Your Name"
            />
            <input
              type="tel"
              required
              name="phone"
              className="w-full px-4 py-4 bg-[#144A7C] border border-[#2061A0] rounded-xl focus:ring-2 focus:ring-brand-light focus:outline-none text-white placeholder-white/40"
              placeholder="Phone Number"
            />
          </div>
          <input
            type="text"
            required
            name="address"
            className="w-full px-4 py-4 bg-[#144A7C] border border-[#2061A0] rounded-xl focus:ring-2 focus:ring-brand-light focus:outline-none text-white placeholder-white/40"
            placeholder="Service Address or ZIP Code"
          />
          <button
            type="submit"
            className="w-full bg-[#E93B32] hover:bg-red-600 text-white font-bold text-lg px-8 py-5 rounded-xl uppercase tracking-wider transition-colors shadow-[0_4px_14px_0_rgba(233,59,50,0.39)]"
          >
            Send My Estimate
          </button>
        </form>

        {/* Mobile-only: Book Online option below form (since the circle on the right is hidden on mobile) */}
        <div className="lg:hidden mt-6 pt-6 border-t border-white/10">
          <p className="text-white/60 text-sm mb-3 text-center uppercase tracking-widest font-bold">
            — or skip the form —
          </p>
          <BookingButton
            size="lg"
            fullWidth
            source="final-cta-mobile"
            label="Book Online Instantly"
          />
        </div>
      </div>

      {/* RIGHT COLUMN: Functional Book Now circle (desktop only) */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center gap-3">
        <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
          Or skip the form
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
        <p className="text-white/40 text-xs uppercase tracking-widest">
          Instant · Self-Serve
        </p>
      </div>
    </div>
  );
}