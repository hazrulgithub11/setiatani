import { ChevronRight } from "lucide-react";

// Each business card maps to one column in the dark navy section.
// Images are Unsplash stand-ins; swap src props with real licensed assets.
const BUSINESSES = [
  {
    title: "Plantation",
    description:
      "A fully integrated oil palm estate operator managing extensive plantations across Malaysia, ensuring sustainable agricultural practices from nursery to fresh fruit bunch harvest.",
    imageSrc:
      "https://images.unsplash.com/photo-1596786232430-8b5bd1e1c555?w=700&q=80",
    imageAlt:
      "Rows of mature oil palm trees on a Setia Tani plantation estate in Malaysia",
    href: "#plantation",
  },
  {
    title: "Palm Oil Milling",
    description:
      "State-of-the-art processing mills that extract high-quality Crude Palm Oil (CPO) and Palm Kernel from Fresh Fruit Bunches, serving domestic refineries and export markets worldwide.",
    imageSrc:
      "https://images.unsplash.com/photo-1565264162849-45f0d6456d33?w=700&q=80",
    imageAlt:
      "Interior of a modern palm oil mill — processing equipment and conveyor systems",
    href: "#milling",
  },
] as const;

// Isolated card so the markup for each business stays DRY and easy to extend.
function BusinessCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
}: (typeof BUSINESSES)[number]) {
  return (
    <article className="flex flex-col gap-4">
      {/* Title row — yellow left border accent matches the screenshot exactly */}
      <h3 className="border-l-4 border-[#F5A623] pl-3 text-xl font-bold text-white">
        {title}
      </h3>

      {/* Card image — fixed aspect ratio so both columns align regardless of
          viewport width. object-cover crops to fill without stretching. */}
      <div className="overflow-hidden rounded-sm">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-[180px] w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-[200px]"
          loading="lazy"
        />
      </div>

      {/* Description text — slightly muted white for the dark background */}
      <p className="text-sm leading-relaxed text-white/75">{description}</p>

      {/* Outlined "Learn more" button — border-only style on the dark background */}
      <div>
        <a
          href={href}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/60 px-5 py-2 text-sm text-white/90 transition-colors hover:border-white hover:text-white"
          aria-label={`Learn more about Setia Tani ${title}`}
        >
          Learn more
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function BusinessesSection() {
  return (
    // Dark navy background
    <section
      className="bg-[#0d1e52] py-14"
      aria-labelledby="businesses-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Visually hidden heading keeps the section accessible to screen readers
            without adding a visible title that isn't in the original design */}
        <h2 id="businesses-heading" className="sr-only">
          Our Businesses
        </h2>

        {/* Two-column grid — stacks to single column on mobile */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
          {BUSINESSES.map((biz) => (
            <BusinessCard key={biz.title} {...biz} />
          ))}
        </div>
      </div>
    </section>
  );
}
