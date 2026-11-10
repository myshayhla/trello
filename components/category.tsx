import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Skincare",
    image: "/images/category-skincare.jpg",
    href: "/shop/skincare",
  },
  {
    id: 2,
    title: "Makeup",
    image: "/images/category-makeup.jpg",
    href: "/shop/makeup",
  },
  {
    id: 3,
    title: "Haircare",
    image: "/images/category-haircare.jpg",
    href: "/shop/haircare",
  },
  {
    id: 4,
    title: "Body Care",
    image: "/images/category-bodycare.jpg",
    href: "/shop/body-care",
  },
];

const Category = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-[#A58A79]">
            Explore our collection
          </span>

          <h2 className="text-3xl font-light tracking-tight text-[#292524] md:text-4xl">
            Shop by Category
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#77716C]">
            Everything you need to feel confident and beautiful, curated just
            for you.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((category) => (
            <Link href={category.href} key={category.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F5F1]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-medium tracking-wide text-[#292524] md:text-base">
                  {category.title}
                </h3>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
