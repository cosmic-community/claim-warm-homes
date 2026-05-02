import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-extrabold gradient-text leading-tight">warm homes</span>
            <span className="text-xs tracking-[0.3em] text-warm-500 -mt-1">grant</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/grants" className="text-sm font-medium text-gray-700 hover:text-warm-600 transition-colors">
              Grant Programs
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-warm-600 transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-gray-700 hover:text-warm-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/faqs" className="text-sm font-medium text-gray-700 hover:text-warm-600 transition-colors">
              FAQs
            </Link>
          </nav>

          <Link
            href="/grants"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-warm-gradient text-white rounded-full text-sm font-semibold shadow-lg shadow-warm-500/30 hover:shadow-xl hover:shadow-warm-500/40 transition-all"
          >
            Check Eligibility
          </Link>
        </div>
      </div>
    </header>
  );
}