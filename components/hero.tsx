import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#F8F5F1]">
      <div className="container mx-auto grid min-h-[600px] grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
        {/* Hero Content */}
        <div className="max-w-xl">
          <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-[#A58A79]">
            Beauty begins with care
          </span>

          <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-[#292524] sm:text-5xl lg:text-6xl">
            Your skin deserves
            <span className="block font-serif italic text-[#A58A79]">
              the best care.
            </span>
          </h1>

          <p className="mb-8 max-w-md text-sm leading-7 text-[#77716C] sm:text-base">
            Discover a collection of carefully selected skincare essentials
            designed to nourish, protect and enhance your natural beauty.
          </p>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-[#292524] px-9 py-4 text-xs font-medium uppercase tracking-widest text-white transition duration-300 hover:bg-[#A58A79]"
          >
            Shop Collection
          </Link>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-2xl font-light text-[#292524]">100%</p>
              <p className="mt-1 text-xs text-[#77716C]">Beauty focused</p>
            </div>

            <div className="h-10 w-px bg-[#D9D0C8]" />

            <div>
              <p className="text-2xl font-light text-[#292524]">Daily</p>
              <p className="mt-1 text-xs text-[#77716C]">Skincare essentials</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[380px] w-full overflow-hidden sm:h-[480px] md:h-[520px]">
          <Image
            src="/public/images/hero-skincare.jpg"
            alt="Luxury skincare collection"
            fill
            priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                     
            className="object-cover"
          />
        </div>  
      </div>
    </section>
  );
};

export default Hero;
