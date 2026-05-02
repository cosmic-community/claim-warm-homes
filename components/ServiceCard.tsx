import Link from 'next/link';
import type { Service } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title;
  const description = getMetafieldValue(service.metadata?.short_description);
  const emoji = getMetafieldValue(service.metadata?.icon_emoji);
  const savings = getMetafieldValue(service.metadata?.estimated_savings);
  const image = service.metadata?.service_image;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-warm-200 hover:shadow-xl hover:shadow-warm-500/10 transition-all duration-300"
    >
      {image && (
        <div className="relative h-48 overflow-hidden bg-warm-soft">
          <img
            src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        {emoji && <div className="text-4xl mb-3">{emoji}</div>}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-warm-600 transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>
        )}
        {savings && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-warm-50 rounded-full">
            <span className="text-xs font-semibold text-warm-700">Save {savings}</span>
          </div>
        )}
      </div>
    </Link>
  );
}