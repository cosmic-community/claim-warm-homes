import TestimonialCard from '@/components/TestimonialCard';
import { getTestimonials } from '@/lib/cosmic';

export const metadata = {
  title: 'Testimonials | Claim Warm Homes',
  description: 'Real stories from people who saved with Warm Homes grants.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="bg-cream">
      <section className="bg-warm-soft py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Customer <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from real homeowners and tenants who transformed their homes with Warm Homes grants.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">No testimonials yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}