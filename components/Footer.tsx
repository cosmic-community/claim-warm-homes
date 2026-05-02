import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-extrabold text-warm-400">warm homes</span>
              <span className="text-xs tracking-[0.3em] text-warm-300 -mt-1">grant</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Helping UK homeowners and tenants access free heating, insulation, and energy-saving improvements through government-funded grants.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/grants" className="hover:text-warm-400 transition-colors">Grant Programs</Link></li>
              <li><Link href="/services" className="hover:text-warm-400 transition-colors">Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-warm-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/faqs" className="hover:text-warm-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>UK Wide Service</li>
              <li>Free Eligibility Check</li>
              <li>Government Funded</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Claim Warm Homes Grant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}