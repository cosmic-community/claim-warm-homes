// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, getMetafieldValue } from '@/lib/cosmic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  const name = getMetafieldValue(service.metadata?.service_name) || service.title;
  const description = getMetafieldValue(service.metadata?.short_description);
  const fullDescription = getMetafieldValue(service.metadata?.full_description);
  const benefits = getMetafieldValue(service.metadata?.key_benefits);
  const savings = getMetafieldValue(service.metadata?.estimated_savings);
  const emoji = getMetafieldValue(service.metadata?.icon_emoji);
  const image = service.metadata?.service_image;
  const programs = service.metadata?.available_programs;

  return (
    <div className="bg-cream">
      <section className="bg-warm-soft py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {emoji && <div className="text-6xl mb-4">{emoji}</div>}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">{name}</h1>
          {description && <p className="text-xl text-gray-700 max-w-2xl mx-auto">{description}</p>}
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {image && (
            <div className="rounded-3xl overflow-hidden mb-12 shadow-xl">
              <img
                src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full h-auto"
              />
            </div>
          )}

          {savings && (
            <div className="bg-warm-gradient rounded-2xl p-6 text-white mb-8 text-center">
              <div className="text-sm uppercase tracking-wide opacity-90">Estimated Savings</div>
              <div className="text-4xl font-extrabold">{savings}</div>
            </div>
          )}

          {fullDescription && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">{fullDescription}</div>
            </div>
          )}

          {benefits && (
            <div className="bg-white rounded-2xl p-8 border border-warm-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{benefits}</div>
            </div>
          )}

          {programs && Array.isArray(programs) && programs.length > 0 && (
            <div className="bg-white rounded-2xl p-8 border border-warm-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Through</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {programs.map((program) => {
                  if (!program || !program.slug) return null;
                  return (
                    <Link
                      key={program.id}
                      href={`/grants/${program.slug}`}
                      className="px-4 py-3 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors font-medium text-gray-900"
                    >
                      {getMetafieldValue(program.metadata?.program_name) || program.title} →
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-semibold hover:border-warm-400 transition-colors"
            >
              ← Back to all services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}