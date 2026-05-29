import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

// Single source of truth for your booking URL.
// Change it here once and every button across the site updates.
export const BOOKING_URL = 'https://txexpresspw.setmore.com/';

type BookingButtonProps = {
  /** Visual size of the button. */
  size?: 'sm' | 'md' | 'lg';
  /** Visual style. 'primary' = red filled, 'secondary' = navy outline. */
  variant?: 'primary' | 'secondary';
  /** Override the default label text. */
  label?: string;
  /** Show the calendar icon on the left. Defaults to true. */
  showIcon?: boolean;
  /** Stretch to full width of parent (mobile-friendly). */
  fullWidth?: boolean;
  /** Optional className for extra customization. */
  className?: string;
  /** For analytics — describe where this button lives. */
  source?: string;
};

export const BookingButton: React.FC<BookingButtonProps> = ({
  size = 'md',
  variant = 'primary',
  label = 'Book Now',
  showIcon = true,
  fullWidth = false,
  className = '',
  source = 'unknown',
}) => {
  const handleClick = () => {
    // Lightweight analytics hook — logs which button was clicked.
    // Later, swap this for Google Analytics, Plausible, or PostHog.
    if (typeof window !== 'undefined') {
      console.log('[BookingButton] Clicked from:', source);
    }
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-brand-red text-white hover:bg-red-700 shadow-md hover:shadow-lg',
    secondary:
      'bg-transparent text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white',
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 18;

  return (
    <motion.a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`
        inline-flex items-center justify-center
        font-semibold rounded-lg
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      aria-label="Book a pressure washing appointment online"
    >
      {showIcon && <Calendar size={iconSize} strokeWidth={2.5} />}
      <span>{label}</span>
      {size === 'lg' && <ArrowRight size={iconSize} strokeWidth={2.5} />}
    </motion.a>
  );
};