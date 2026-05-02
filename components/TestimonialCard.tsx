import type { Testimonial } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const name = getMetafieldValue(testimonial.metadata?.customer_name) || testimonial.title;
  const location = getMetafieldValue(testimonial.metadata?.location);
  const quote = getMetafieldValue(testimonial.metadata?.quote);
  const savings = getMetafieldValue(testimonial.metadata?.annual_savings);
  const rating = testimonial.metadata?.star_rating ?? 5;
  const photo = testimonial.metadata?.customer_photo;

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? 'text-warm-500' : 'text-gray-200'}>★</span>
        ))}
      </div>

      {quote && (
        <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
          "{quote}"
        </blockquote>
      )}

      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          {photo ? (
            <img
              src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-warm-gradient flex items-center justify-center text-white font-bold">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            {location && <div className="text-sm text-gray-500">{location}</div>}
          </div>
        </div>
        {savings && (
          <div className="text-right">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Saved</div>
            <div className="font-bold gradient-text">{savings}</div>
          </div>
        )}
      </div>
    </div>
  );
}