import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Stagger container for the three text children (h2, p, button).
const bannerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const bannerItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// Aerial view of lush green palm oil plantation — replace with a licensed asset when available.
const BANNER_IMAGE_URL =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80";

export function SustainabilityBanner() {
  return (
    // Same stacking technique as Hero: relative → absolute overlay → relative content
    <section
      className="relative h-[340px] w-full overflow-hidden md:h-[400px]"
      aria-label="Committed to Sustainable Palm Oil Production banner"
    >
      {/* Background aerial-forest image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BANNER_IMAGE_URL}')` }}
        role="img"
        aria-label="Aerial view of lush green palm oil plantation estates"
      />

      {/* Semi-transparent dark overlay — slightly lighter than the main Hero
          so the treetops stay visible behind the text */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Centred text content — staggered fade-up when section enters viewport */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
        variants={bannerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          className="max-w-xl text-3xl font-bold leading-snug drop-shadow-md sm:text-4xl"
          variants={bannerItem}
        >
          Committed to Sustainable Palm Oil Production
        </motion.h2>

        <motion.p
          className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 drop-shadow"
          variants={bannerItem}
        >
          Our comprehensive sustainability framework ensures environmentally
          responsible palm oil production, protecting biodiversity, supporting
          smallholder farmers, and delivering RSPO-certified sustainable products
          that meet the highest global standards.
        </motion.p>

        <motion.button
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/80 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Learn about our sustainability commitment"
          variants={bannerItem}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Our Sustainability Commitment
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </motion.button>
      </motion.div>
    </section>
  );
}
