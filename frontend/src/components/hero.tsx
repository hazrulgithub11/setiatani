import { ChevronLeft, ChevronRight } from "lucide-react";

// Aerial view of a palm oil plantation — replace with a licensed asset when available.
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=1600&q=80";

export function Hero() {
  return (
    // `relative` creates the stacking context so the overlay and arrows
    // position relative to this element, not the entire page.
    <section
      className="relative h-[420px] w-full overflow-hidden md:h-[480px]"
      aria-label="Harvesting Prosperity hero banner"
    >
      {/* ── Background image ── */}
      {/* We use an inline style for the background-image URL because Tailwind's
          JIT compiler can't safely purge dynamic string interpolation inside
          class names. The rest of the styling stays in Tailwind utilities. */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
        role="img"
        aria-label="Aerial view of a palm oil plantation — representing sustainable agriculture and growth"
      />

      {/* ── Dark semi-transparent overlay ──
          rgba(0,0,0,0.42) matches the screenshot's dark-but-not-black feel.
          Without this layer the white text would be illegible against the bright green. */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* ── Left arrow ── */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/35"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* ── Centered content ──
          `relative z-10` lifts the text above the overlay layer. */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="max-w-2xl text-3xl font-bold leading-snug drop-shadow-md sm:text-4xl lg:text-[2.6rem]">
          Harvesting Prosperity, Sustaining Our Future
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 drop-shadow sm:max-w-lg sm:text-[13px]">
          We are dedicated to advancing sustainable palm oil production that
          creates lasting value for our communities, environment, and
          stakeholders through responsible farming practices and innovative
          processing solutions.
        </p>

        {/* CTA button: green rounded-full pill style */}
        <button
          className="mt-7 rounded-full bg-[#003087] px-7 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#00418f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Learn about our corporate vision and mission"
        >
          Our Vision &amp; Mission
        </button>
      </div>

      {/* ── Right arrow ── */}
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/35"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
    </section>
  );
}
