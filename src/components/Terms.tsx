import { ArrowLeft } from 'lucide-react';
import { BookingButton } from './BookingButton';

// Update this date whenever you make material changes to the terms.
const LAST_UPDATED = 'June 2026';

export function Terms() {
  return (
    <div className="min-h-screen font-sans bg-[#F4F5F7] p-2 sm:p-4 lg:p-6 text-brand-navy selection:bg-brand-red selection:text-white">
      <div className="max-w-[900px] mx-auto w-full flex flex-col gap-4">
        {/* Top nav bar — simple back link instead of full navbar */}
        <div className="w-full bg-white rounded-3xl shrink-0 border border-gray-100 shadow-sm flex items-center justify-between px-6 py-4">
          <a
            href="/"
            className="flex items-center gap-2 text-brand-navy hover:text-brand-red transition-colors font-bold text-sm uppercase tracking-wider"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
            Back to Home
          </a>
          <div className="flex items-center gap-3">
            <div className="bg-brand-navy text-white font-display font-black italic px-3 py-1 rounded text-2xl flex items-center tracking-tighter">
              TEPW
            </div>
          </div>
        </div>

        {/* Terms content card */}
        <div className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-sm">
          {/* Header */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <div className="inline-block bg-[#F0F4F8] text-[#c21c15] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Legal
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold italic mb-3 tracking-tight text-brand-navy">
              Service Terms &amp; Policies
            </h1>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Intro */}
          <div className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              These terms apply to all services provided by Texas Express Power Washing
              (&quot;TEPW,&quot; &quot;we,&quot; &quot;us&quot;). By booking a service through our website,
              by phone, or in person, you (&quot;customer,&quot; &quot;you&quot;) agree to these terms.
              We've written them in plain English. If anything is unclear, text us at{' '}
              <a href="tel:8323617856" className="text-brand-red font-bold hover:underline">
                832-361-7856
              </a>{' '}
              and we'll explain.
            </p>
          </div>

          {/* Section: Bookings & Payment */}
          <Section title="1. Bookings &amp; Payment">
            <P>
              <strong>Deposits.</strong> Some appointments require a deposit at booking, which
              is applied to your final balance. Deposits are refundable up to 24 hours before
              your appointment.
            </P>
            <P>
              <strong>Final payment.</strong> The remaining balance is due upon completion of
              service. We accept PayPal, cash, and most major credit cards. Invoices not paid
              within 7 days of service may incur a 5% late fee.
            </P>
            <P>
              <strong>Pricing.</strong> Prices listed on our website and booking page are for
              services performed under standard conditions and within published service
              parameters (e.g., a standard 2-car driveway under 600 sq ft). Oversized
              properties, heavy staining requiring multiple passes, or unusual conditions may
              require an on-site re-quote before work begins. We'll always discuss pricing
              changes with you before proceeding.
            </P>
            <P>
              <strong>Promotional pricing.</strong> Launch specials, seasonal discounts, and
              promo codes apply only to services performed within the dates published for the
              promotion. Bookings made during a promotion but scheduled outside the promotional
              window may be re-quoted at standard rates.
            </P>
          </Section>

          {/* Section: Rescheduling & Cancellations */}
          <Section title="2. Rescheduling &amp; Cancellations">
            <P>
              <strong>Free rescheduling</strong> with 24 or more hours of notice before your
              appointment. Use the reschedule link in your confirmation, or text us.
            </P>
            <P>
              <strong>Same-day reschedules and no-shows</strong> forfeit any deposit paid. If
              we arrive at your property and cannot perform service due to lack of access,
              lack of water (when no Water Provided add-on was purchased), or because no one is
              available to confirm scope, a $50 trip fee applies.
            </P>
            <P>
              <strong>If we need to reschedule</strong> (rare — usually due to equipment issues
              or weather), we'll notify you as far in advance as possible and reschedule at no
              charge.
            </P>
          </Section>

          {/* Section: Weather */}
          <Section title="3. Weather Policy">
            <P>
              We work in light rain — it doesn't affect cleaning quality. We reschedule at no
              charge for sustained heavy rain, thunderstorms, lightning within five miles,
              winds above 25 mph, or freezing temperatures (when applicable).
            </P>
            <P>
              We make weather calls by 6 AM the morning of your appointment. You'll receive a
              text if we need to reschedule.
            </P>
          </Section>

          {/* Section: Water Access */}
          <Section title="4. Water Access">
            <P>
              <strong>Customer-provided water.</strong> Our standard services use your
              property's outdoor water spigot. By booking standard service, you authorize TEPW
              to access and use your outdoor water source during the appointment window. You
              are responsible for ensuring at least one functional outdoor spigot with adequate
              flow (4+ GPM) is accessible.
            </P>
            <P>
              <strong>If no water is available</strong> at the time of service and the &quot;Water
              Provided by Us&quot; add-on was not booked, one of the following will apply at our
              discretion: (a) the add-on fee ($35) will be added to your bill and we'll
              proceed with our tank, or (b) the appointment will be rescheduled with a $50
              trip fee.
            </P>
            <P>
              <strong>Water usage.</strong> Water usage will vary depending on size and condition
              of the area being cleaned. We are not responsible water utility charges resulting
              from normal service operations.
            </P>
          </Section>

          {/* Section: Property Condition */}
          <Section title="5. Property Condition &amp; Pre-Existing Damage">
            <P>
              <strong>Our work standard.</strong> We use commercial-grade equipment operated by
              trained personnel. Under normal conditions and on properties in normal condition,
              our cleaning will not damage concrete, vinyl siding, brick, or properly sealed
              wood surfaces.
            </P>
            <P>
              <strong>Pre-existing damage you must disclose</strong> on your booking or before
              we begin work: cracked or spalling concrete; loose, damaged, or improperly
              installed siding; rotted wood; failing paint or stain; damaged or unsealed
              windows; failing window seals; loose mortar; recently painted, stained, or sealed
              surfaces (within 30 days); damaged or unreliable outdoor outlets or spigots.
            </P>
            <P>
              <strong>Our responsibility.</strong> We are responsible for damage we cause
              through negligence or improper technique. We are NOT responsible for: (a)
              worsening of pre-existing damage that the customer did not disclose, (b) damage
              to plants or landscaping caused by normal overspray or detergent runoff, (c)
              water intrusion through windows, doors, or vents that were not properly sealed
              before our arrival, (d) damage to items left out that should have been moved
              indoors, or (e) damage caused by customer-supplied water sources (e.g., a hose
              that bursts during use).
            </P>
            <P>
              <strong>Inspection.</strong> If we observe pre-existing damage or conditions
              that could be worsened by cleaning, we will point them out to you before starting
              and document them with photos. Continuing with service after notification of
              such conditions releases TEPW from liability for those specific items.
            </P>
          </Section>

          {/* Section: Liability Limit */}
          <Section title="6. Limitation of Liability">
            <P>
              To the maximum extent permitted by North Carolina law, TEPW's total liability
              for any claim arising from our services — whether based in contract, tort,
              warranty, or any other theory — shall not exceed the amount paid by the customer
              for the specific service that gave rise to the claim.
            </P>
            <P>
              TEPW is not liable for indirect, incidental, consequential, special, or punitive
              damages, including but not limited to: lost income, lost use of property,
              emotional distress, or diminished property value.
            </P>
            <P>
              Nothing in these terms is intended to limit liability for gross negligence,
              willful misconduct, or any liability that cannot be limited under applicable law.
            </P>
          </Section>

          {/* Section: Satisfaction Guarantee */}
          <Section title="7. Satisfaction Guarantee">
            <P>
              If you're not satisfied with any area we've cleaned, tell us{' '}
              <strong>before we leave the property</strong> and we will re-clean the area at
              no charge, or refund the portion of the service related to that area — your
              choice. This is a no-questions-asked policy applied to issues identified
              on the day of service.
            </P>
            <P>
              <strong>What this guarantee doesn't cover:</strong> staining or discoloration
              that returns after we leave (which may be caused by underlying surface conditions
              outside our control), areas you didn't include in the original scope, or issues
              raised more than 48 hours after service completion. For issues raised after we
              leave, please contact us within 48 hours and we'll work with you on a fair
              resolution case-by-case.
            </P>
          </Section>

          {/* Section: Photo Usage */}
          <Section title="8. Photo &amp; Marketing Usage">
            <P>
              We routinely photograph our work for portfolio, social media, marketing, and
              quality-control purposes. By booking with us, you grant TEPW a perpetual,
              royalty-free license to use photos and videos of the cleaned surfaces and exterior
              of your property in our marketing materials, social media posts, website, and
              advertising.
            </P>
            <P>
              <strong>What we do NOT photograph or share:</strong> interior of any structure,
              license plates or vehicle identifiers, identifiable people without consent,
              house numbers or street addresses (unless you specifically authorize), or any
              content that could compromise your security or privacy.
            </P>
            <P>
              If you'd prefer we not use photos of your property in marketing, simply let us
              know before service begins or within 30 days after — text us at{' '}
              <a href="tel:8323617856" className="text-brand-red font-bold hover:underline">
                832-361-7856
              </a>{' '}
              and we'll remove your property from any marketing assets and not photograph
              future jobs at that location.
            </P>
          </Section>

          {/* Section: Service Area */}
          <Section title="9. Service Area">
            <P>
              We currently serve Charlotte, North Carolina and surrounding areas within
              approximately 20 miles of central Charlotte. Service to properties outside this
              area may be available upon request and may include additional travel fees, which
              will be quoted before booking.
            </P>
          </Section>

          {/* Section: Dispute Resolution */}
          <Section title="10. Dispute Resolution">
            <P>
              <strong>Try us first.</strong> If you have any issue with our service, please
              contact us directly before pursuing other remedies. We take customer issues
              seriously and resolve the vast majority of concerns within a single phone call
              or text exchange. Most problems are misunderstandings, not malice.
            </P>
            <P>
              <strong>Governing law.</strong> These terms are governed by the laws of the
              State of North Carolina, without regard to conflict-of-law principles.
            </P>
            <P>
              <strong>Venue.</strong> Any legal disputes that cannot be resolved through
              direct communication shall be brought in the state or federal courts located in
              Mecklenburg County, North Carolina.
            </P>
            <P>
              <strong>Informal resolution.</strong> Before either party initiates a lawsuit,
              both parties agree to attempt to resolve the dispute through good-faith
              negotiation for at least 30 days.
            </P>
          </Section>

          {/* Section: Changes */}
          <Section title="11. Changes to These Terms">
            <P>
              We may update these terms periodically. The version posted on this page at the
              time of your booking applies to that service. Material changes will be reflected
              in the &quot;Last updated&quot; date above. Continued use of our services after a change
              constitutes acceptance of the updated terms.
            </P>
          </Section>

          {/* Section: Contact */}
          <Section title="12. Contact Us">
            <P>
              Questions about these terms or our services? Reach out anytime:
            </P>
            <div className="bg-[#F0F4F8] rounded-2xl p-6 mt-4">
              <p className="font-display text-lg font-bold text-brand-navy mb-2">
                Texas Express Power Washing
              </p>
              <p className="text-gray-700 mb-1">
                Phone &amp; Text:{' '}
                <a href="tel:8323617856" className="text-brand-red font-bold hover:underline">
                  832-361-7856
                </a>
              </p>
              <p className="text-gray-700 mb-1">
                Web:{' '}
                <a href="/" className="text-brand-red font-bold hover:underline">
                  tepw-website.vercel.app
                </a>
              </p>
              <p className="text-gray-700">
                Booking:{' '}
                <a
                  href="https://txexpresspw.setmore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red font-bold hover:underline"
                >
                  txexpresspw.setmore.com
                </a>
              </p>
            </div>
          </Section>

          {/* Booking CTA at the bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="font-display text-2xl font-bold italic mb-4 text-brand-navy">
              Ready to book?
            </h3>
            <p className="text-gray-600 mb-6">
              By booking online, you confirm that you've read and agree to these terms.
            </p>
            <BookingButton size="lg" source="terms-page-cta" label="Book Online" />
          </div>
        </div>

        {/* Footer link */}
        <div className="text-center text-gray-400 text-sm py-6">
          © {new Date().getFullYear()} Texas Express Power Washing. All rights reserved.
        </div>
      </div>
    </div>
  );
}

/** Reusable section wrapper for consistent heading styles. */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        className="font-display text-2xl sm:text-3xl font-bold italic mb-5 text-brand-navy tracking-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="space-y-4">{children}</div>
    </div>
  );
}

/** Reusable paragraph with consistent legal-page typography. */
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 leading-relaxed">{children}</p>;
}