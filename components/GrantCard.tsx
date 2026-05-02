import Link from 'next/link';
import type { GrantProgram } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function GrantCard({ grant }: { grant: GrantProgram }) {
  const name = getMetafieldValue(grant.metadata?.program_name) || grant.title;
  const description = getMetafieldValue(grant.metadata?.short_description);
  const maxValue = getMetafieldValue(grant.metadata?.max_grant_value);
  const status = getMetafieldValue(grant.metadata?.status);
  const heroImage = grant.metadata?.hero_image;

  return (
    <Link
      href={`/grants/${grant.slug}`}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-warm-200 hover:shadow-2xl hover:shadow-warm-500/10 transition-all duration-300"
    >
      {heroImage && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={`${heroImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {status && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur rounded-full text-xs font-semibold text-warm-700">
              {status}
            </span>
          )}
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-warm-600 transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {maxValue && (
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Max Value</div>
              <div className="text-lg font-bold gradient-text">{maxValue}</div>
            </div>
          )}
          <span className="text-warm-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
}