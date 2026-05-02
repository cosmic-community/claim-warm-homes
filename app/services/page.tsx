import ServiceCard from '@/components/ServiceCard';
import { getServices } from '@/lib/cosmic';

export const metadata = {
  title: 'Services | Claim Warm Homes',
  description: 'Energy-saving services available through Warm Homes grants.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="bg-cream">
      <section className="bg-warm-soft py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore the range of energy-saving improvements available to qualifying homeowners and tenants.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">No services available.</p>
          )}
        </div>
      </section>
    </div>
  );
}