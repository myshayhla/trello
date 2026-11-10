import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="container mx-auto">
        <div className="relative overflow-hidden bg-[#EDE4DC] px-6 py-16 text-center sm:px-12 md:py-24">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D6C5B7] opacity-60" />

          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-[#D6C5B7] opacity-60" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.3em] text-[#A58A79] sm:text-xs">
              A little self-care goes a long way
            </span>

            <h2 className="text-3xl font-light leading-tight tracking-tight text-[#292524] sm:text-4xl md:text-5xl">
              Your beauty,
              <span className="block font-serif italic text-[#A58A79]">
                your ritual.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#77716C]">
              Discover your new skincare favorites and give your skin the care
              it deserves.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-3 bg-[#292524] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#A58A79]"
            >
              Explore Collection
              <span>→</span>
            </Link>
          </div>

          {/* Bottom Label */}
          <span className="absolute bottom-5 right-6 text-[9px] uppercase tracking-[0.2em] text-[#A58A79]">
            Beauty Collection — 2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
