import { Play } from "lucide-react";

// This section sits between BusinessesSection and any future content.
// Layout: video thumbnail (left ~55%) + "Our Drivers of Growth" text (right ~45%).
export function DriversSection() {
  return (
    <section
      className="bg-white py-14"
      aria-labelledby="drivers-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Flex row on md+, stacked on mobile */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-stretch md:gap-12">

          {/* ── Left: Video thumbnail ─────────────────────────────────────────
              Simulates the embedded Scientex brand video.
              The thumbnail recreates the blue-sky + logo + play-button composition
              visible in the screenshot. Replace with an <iframe> or <video> when
              the actual video embed URL is available. */}
          <div className="relative w-full shrink-0 overflow-hidden rounded-sm md:w-[52%]">
            {/* Sky-blue gradient background mimicking the video thumbnail */}
            <div
              className="flex h-[220px] w-full flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-sky-600 sm:h-[260px] md:h-full md:min-h-[220px]"
              aria-hidden="true"
            >
              {/* Scientex wordmark on the thumbnail */}
              <div className="flex flex-col items-center select-none">
                <span className="text-3xl font-extrabold uppercase tracking-widest text-white drop-shadow-md">
                  SCIENTEX
                </span>
                {/* Yellow swoosh underline approximation */}
                <svg
                  width="180"
                  height="22"
                  viewBox="0 0 180 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M 10 16 Q 90 2 170 16"
                    stroke="#F5A623"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="mt-1 text-xs italic text-white/80">
                  healthy, friendly &amp; happy
                </span>
              </div>
            </div>

            {/* Yellow circular play button — absolutely centered over the thumbnail */}
            <button
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#F5A623] shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623]"
              aria-label="Play Scientex company video"
            >
              {/* Nudge the icon right by 2px so it looks optically centred inside the circle */}
              <Play
                className="ml-0.5 h-6 w-6 fill-white text-white"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* ── Right: "Our Drivers of Growth" text block ───────────────────── */}
          <div className="flex flex-col justify-center md:w-[48%]">
            <h2
              id="drivers-heading"
              className="text-2xl font-bold text-[#003087] sm:text-[1.6rem]"
            >
              Our Drivers of Growth
            </h2>

            {/* Gold accent bar — identical in style to the one in StatsSection */}
            <div className="mt-2 h-[3px] w-10 bg-[#F5A623]" aria-hidden="true" />

            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              Our streamlined focus on our three drivers of growth, namely{" "}
              {/* Key phrase is bold as in the screenshot */}
              <strong className="font-semibold text-gray-800">
                Capacity, Efficiency, and Product Value
              </strong>
              , spearheads our endeavours to offer superior products and
              solutions at greater scale and efficiency, propelling us towards
              our Group's vision and ambitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
