// app/grants/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGrantBySlug } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function GrantDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const grant = await getGrantBySlug(slug);

  if (!grant) notFound();

  const name = getMetafieldValue(grant.metadata?.program_name) || grant.title;
  const description = getMetafieldValue(grant.metadata?.short_description);
  const fullDetails = getMetafieldValue(grant.metadata?.full_details);
  const eligibility = getMetafieldValue(grant.metadata?.eligibility_criteria);
  const maxValue = getMetafieldValue(grant.metadata?.max_grant_value);
  const status = getMetafieldValue(grant.metadata?.status);
  const heroImage = grant.metadata?.hero_image;

  return (
    <div className="bg-cream">
      {heroImage && (
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={`${heroImage.imgix_url}?w=2000&h=1000&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
              {status && (
                <span className="inline-block px-3 py-1 bg-white/95 rounded-full text-xs font-semibold text-warm-700 mb-4">
                  {status}
                </span>
              )}
              <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl">{name}</h1>
            </div>
          </div>
        </div>
      )}

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!heroImage && (
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{name}</h1>
          )}

          {description && (
            <p className="text-xl text-gray-700 leading-relaxed mb-8">{description}</p>
          )}

          {maxValue && (
            <div className="bg-warm-gradient rounded-2xl p-6 text-white mb-8">
              <div className="text-sm uppercase tracking-wide opacity-90">Maximum Grant Value</div>
              <div className="text-4xl font-extrabold">{maxValue}</div>
            </div>
          )}

          {fullDetails && (
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Details</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{fullDetails}</div>
            </div>
          )}

          {eligibility && (
            <div className="bg-white rounded-2xl p-8 border border-warm-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{eligibility}</div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/grants"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-semibold hover:border-warm-400 transition-colors"
            >
              ← Back to all grants
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}