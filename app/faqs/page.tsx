import FAQAccordion from '@/components/FAQAccordion';
import { getFAQs } from '@/lib/cosmic';

export const metadata = {
  title: 'FAQs | Claim Warm Homes',
  description: 'Frequently asked questions about Warm Homes grants.',
};

export default async function FAQsPage() {
  const faqs = await getFAQs();

  return (
    <div className="bg-cream">
      <section className="bg-warm-soft py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about Warm Homes grants and the application process.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}