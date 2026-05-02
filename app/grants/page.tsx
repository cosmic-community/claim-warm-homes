import GrantCard from '@/components/GrantCard';
import { getGrantPrograms } from '@/lib/cosmic';

export const metadata = {
  title: 'Grant Programs | Claim Warm Homes',
  description: 'Browse all available Warm Homes grant programs.',
};

export default async function GrantsPage() {
  const grants = await getGrantPrograms();

  return (
    <div className="bg-cream">
      <section className="bg-warm-soft py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Grant <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover government-funded programs designed to make your home warmer and more energy-efficient.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {grants.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grants.map((grant) => (
                <GrantCard key={grant.id} grant={grant} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">No grants available at the moment.</p>
          )}
        </div>
      </section>
    </div>
  );
}