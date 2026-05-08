import { ChevronRight } from "lucide-react";

// News items sourced directly from the screenshot.
// In a real implementation these would be fetched from an API or CMS.
const NEWS_ITEMS = [
  {
    title: "Scientex Announces Quarter 2 FY2026 Results",
    date: "March 15, 2026",
    href: "#",
  },
  {
    title: "Scientex Announces Quarter 1 FY2026 Results",
    date: "December 17, 2025",
    href: "#",
  },
  {
    title: "Scientex 57th Annual General Meeting",
    date: "September 17, 2025",
    href: "#",
  },
  {
    title: "Changes In Boardroom",
    date: "September 17, 2025",
    href: "#",
  },
  {
    title: "Scientex Announces Quarter 4 FY2025 Results",
    date: "September 17, 2025",
    href: "#",
  },
  {
    title:
      "Scientex Wins at Hubexo Asia Awards 2025 for the Fourth Consecutive Year",
    date: "August 5, 2025",
    href: "#",
  },
] as const;

// Individual news row — a bordered card with title, date, and a right chevron.
function NewsCard({
  title,
  date,
  href,
}: (typeof NEWS_ITEMS)[number]) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between gap-4 rounded-sm border border-gray-200 bg-white px-5 py-4 transition-shadow hover:shadow-md"
      aria-label={`Read news: ${title}`}
    >
      {/* Left: title + date stacked */}
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug text-[#003087] group-hover:underline">
          {title}
        </p>
        <p className="mt-1 text-xs text-gray-400">{date}</p>
      </div>

      {/* Right: chevron — always visible, brightens on hover */}
      <ChevronRight
        className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-[#003087]"
        aria-hidden="true"
      />
    </a>
  );
}

export function NewsSection() {
  return (
    <section className="bg-white py-14" aria-labelledby="news-heading">
      <div className="mx-auto max-w-4xl px-6">
        {/* Centered heading — no accent bar here; the screenshot uses plain centered text */}
        <h2
          id="news-heading"
          className="text-center text-2xl font-bold text-[#003087] sm:text-[1.6rem]"
        >
          Latest News
        </h2>

        {/* 2 × 3 grid of news cards — collapses to 1 column on mobile */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {NEWS_ITEMS.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>

        {/* "More News" CTA — navy filled pill, centred below the grid */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#003087] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#00418f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003087]"
            aria-label="View all latest news"
          >
            More News
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
