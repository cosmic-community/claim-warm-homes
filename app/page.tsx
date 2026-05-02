import Link from 'next/link';
import Hero from '@/components/Hero';
import GrantCard from '@/components/GrantCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { getFeaturedGrants, getGrantPrograms, getServices, getTestimonials } from '@/lib/cosmic';

export default async function HomePage() {
  const [featuredGrants, allGrants, services, testimonials] = await Promise.all([
    getFeaturedGrants(),
    getGrantPrograms(),
    getServices(),
    getTestimonials(),
  ]);

  const grantsToShow = featuredGrants.length > 0 ? featuredGrants : allGrants.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Grants Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="text-sm font-semibold text-warm-600 uppercase tracking-wider mb-2">Grant Programs</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Available <span className="gradient-text">Grants</span>
              </h2>
              <p className="text-lg text-gray-600 mt-3 max-w-2xl">
                Government-funded programs to help you reduce energy bills and improve home comfort.
              </p>
            </div>
            <Link href="/grants" className="text-warm-600 font-semibold hover:text-warm-700 inline-flex items-center gap-1">
              View all grants →
            </Link>
          </div>

          {grantsToShow.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grantsToShow.map((grant) => (
                <GrantCard key={grant.id} grant={grant} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">No grants available at the moment.</p>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-warm-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-warm-600 uppercase tracking-wider mb-2">Our Services</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Energy-Saving <span className="gradient-text">Improvements</span>
            </h2>
          </div>

          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">No services available.</p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-warm-600 uppercase tracking-wider mb-2">Success Stories</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Real People, <span className="gradient-text">Real Savings</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-warm-gradient rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Ready to claim your grant?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Check your eligibility today and start saving on your energy bills.
              </p>
              <Link
                href="/grants"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-warm-600 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}