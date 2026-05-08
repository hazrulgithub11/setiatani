import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const newsGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const newsItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// News items for Setia Tani.
// In a real implementation these would be fetched from an API or CMS.
const NEWS_ITEMS = [
  {
    title: "Setia Tani Announces Quarter 2 FY2026 Financial Results",
    date: "March 15, 2026",
    href: "#",
  },
  {
    title: "Setia Tani Achieves Full RSPO Certification Across All Estates",
    date: "January 20, 2026",
    href: "#",
  },
  {
    title: "Setia Tani 12th Annual General Meeting",
    date: "September 18, 2025",
    href: "#",
  },
  {
    title: "Changes In Boardroom",
    date: "September 18, 2025",
    href: "#",
  },
  {
    title: "Setia Tani Announces Quarter 4 FY2025 Financial Results",
    date: "September 18, 2025",
    href: "#",
  },
  {
    title:
      "Setia Tani Receives Best Sustainable Plantation Operator Award 2025",
    date: "August 12, 2025",
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
        {/* Heading fades up */}
        <motion.h2
          id="news-heading"
          className="text-center text-2xl font-bold text-[#003087] sm:text-[1.6rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
        >
          Latest News
        </motion.h2>

        {/* 2 × 3 grid — each card staggers in with a short delay */}
        <motion.div
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          variants={newsGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {NEWS_ITEMS.map((item) => (
            <motion.div key={item.title} variants={newsItem}>
              <NewsCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* "More News" CTA — fades in after the grid */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#003087] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#00418f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003087]"
            aria-label="View all latest news"
          >
            More News
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
