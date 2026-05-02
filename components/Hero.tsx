import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-soft">
      <div className="absolute top-20 -right-32 w-96 h-96 bg-warm-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-coral-400 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-warm-200 mb-6">
            <span className="w-2 h-2 bg-warm-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-warm-700 tracking-wide uppercase">Government Funded Programs</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-gray-900 mb-6">
            Claim Your <span className="gradient-text">Warm Homes</span> Grant Today
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
            Access free heating, insulation, and energy-saving improvements. Reduce your bills and make your home more comfortable with government-funded programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/grants"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-warm-gradient text-white rounded-full text-base font-semibold shadow-xl shadow-warm-500/30 hover:shadow-2xl hover:shadow-warm-500/40 hover:-translate-y-0.5 transition-all"
            >
              Check Eligibility
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full text-base font-semibold border-2 border-gray-200 hover:border-warm-400 transition-all"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <div className="text-3xl font-extrabold gradient-text">£0</div>
              <div className="text-sm text-gray-600 mt-1">Upfront Cost</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold gradient-text">100%</div>
              <div className="text-sm text-gray-600 mt-1">Government Funded</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold gradient-text">UK</div>
              <div className="text-sm text-gray-600 mt-1">Wide Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}