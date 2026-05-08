import { ChevronRight } from "lucide-react";

// Aerial-forest road photo from Unsplash — closely matches the screenshot's
// bird's-eye view of a road cutting through dense green woodland.
// Replace with a locally hosted asset once the real photo is licensed.
const BANNER_IMAGE_URL =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80";

export function SustainabilityBanner() {
  return (
    // Same stacking technique as Hero: relative → absolute overlay → relative content
    <section
      className="relative h-[340px] w-full overflow-hidden md:h-[400px]"
      aria-label="Prioritising Sustainability for a Brighter Future banner"
    >
      {/* Background aerial-forest image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BANNER_IMAGE_URL}')` }}
        role="img"
        aria-label="Aerial view of a road running through a dense green forest"
      />

      {/* Semi-transparent dark overlay — slightly lighter than the main Hero
          so the treetops stay visible behind the text */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Centred text content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="max-w-xl text-3xl font-bold leading-snug drop-shadow-md sm:text-4xl">
          Prioritising Sustainability for a Brighter Future
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 drop-shadow">
          Our holistic approach to sustainability is designed to ensure the
          long-term generation of shared economic value, protection of the
          environment for future generations and the thoughtful empowerment of
          our people and local communities.
        </p>

        {/* Outlined CTA button — white border + transparent fill so the forest
            image shows through, distinct from the filled navy CTA in the Hero */}
        <button
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/80 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Learn about our approach to sustainability"
        >
          Our Approach to Sustainability
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
