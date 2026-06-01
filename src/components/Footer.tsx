import { BOOKING_URL } from './BookingButton';

export function Footer() {
  return (
    <footer className="bg-transparent py-8 text-center text-brand-navy/60">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-widest mb-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-navy transition-colors"
          >
            Book Online
          </a>
          <span aria-hidden="true">&bull;</span>
          <a
            href="tel:8323617856"
            className="hover:text-brand-navy transition-colors"
          >
            Call (832) 361-7856
          </a>
          <span aria-hidden="true">&bull;</span>
          <a
            href="/terms"
            className="hover:text-brand-navy transition-colors"
          >
            Terms
          </a>
        </div>

        <p className="text-xs">
          &copy; {new Date().getFullYear()} Texas Express Power Washing. Charlotte, NC.
        </p>
      </div>
    </footer>
  );
}