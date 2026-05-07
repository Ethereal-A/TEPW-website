import { Star, MessageSquareQuote } from 'lucide-react';

const reviews = [
  {
    name: 'Michael T.',
    location: 'Charlotte, NC',
    text: 'Texas Express completely transformed our patio and driveway. They showed up early, worked incredibly hard, and the concrete looks brighter than the day we bought the house. Highly recommend!',
  },
  {
    name: 'Sarah R.',
    location: 'Charlotte, NC',
    text: 'I was worried about pressure washing my siding, but their soft wash method was gentle and extremely effective. All the green algae on the north side of the house is 100% gone.',
  },
  {
    name: 'David W.',
    location: 'Charlotte, NC',
    text: 'Fast communication from the very first quote request. The crew was professional and took the time to move our patio furniture carefully. Worth every penny to get the house summer-ready.',
  }
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-6">
            Neighbors Notice the Difference
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here is what local homeowners have to say about our fast, premium exterior cleaning service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-brand-cream/30 p-8 rounded border border-brand-cream relative">
              <MessageSquareQuote className="absolute top-6 right-6 w-10 h-10 text-brand-light/20" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{r.text}"
              </p>
              <div>
                <p className="font-bold text-brand-navy">{r.name}</p>
                <p className="text-sm text-gray-500">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
