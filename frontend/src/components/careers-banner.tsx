import { ChevronRight } from "lucide-react";

// Agricultural team / field workers photo — replace with a licensed Setia Tani asset when available.
const OFFICE_IMAGE_URL =
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=900&q=80";

export function CareersBanner() {
  return (
    // Outer light-gray section to match the off-white background around the card
    <section className="bg-gray-100 py-12" aria-labelledby="careers-heading">
      <div className="mx-auto max-w-4xl px-6">
        {/* Inner wrapper — relative so the navy card can overlay the image */}
        <div className="relative overflow-hidden rounded-sm">

          {/* ── Office photo — fills the full container width ── */}
          <img
            src={OFFICE_IMAGE_URL}
            alt="Setia Tani team members working in the field and operations"
            className="h-[300px] w-full object-cover object-center sm:h-[340px]"
            loading="lazy"
          />

          {/* ── Navy overlay card ──
              Absolutely positioned over the left portion of the image.
              Uses a dark navy background with slight transparency at the right edge
              so it blends into the photo rather than cutting sharply. */}
          <div
            className="absolute inset-y-0 left-0 flex w-[52%] flex-col justify-center bg-[#0d1e52] px-8 py-8 sm:w-[42%]"
            /* A subtle right-side fade so the card blends into the photo behind it.
               We do this with a tailwind arbitrary background-image gradient because
               a solid box edge would look abrupt against the photo. */
            style={{
              background:
                "linear-gradient(to right, #0d1e52 78%, rgba(13,30,82,0))",
            }}
          >
            {/* Small eyebrow text */}
            <p className="text-[11px] font-medium uppercase tracking-widest text-blue-200">
              A Rewarding Career Awaits You at Setia Tani
            </p>

            {/* Gold accent line under the eyebrow */}
            <div className="mt-2 h-[3px] w-8 bg-[#F5A623]" aria-hidden="true" />

            {/* Main headline */}
            <h2
              id="careers-heading"
              className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl"
            >
              Grow your potential as part of our dedicated plantation and
              operations team.
            </h2>

            {/* CTA button — same outlined style as the Sustainability banner */}
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Find out more about careers at Setia Tani"
              >
                Find Out More
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Gold swoosh arc at bottom-right corner of the card — brand signature */}
            <svg
              className="absolute bottom-3 right-0 w-20 opacity-70"
              viewBox="0 0 80 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 0 28 Q 40 0 80 28"
                stroke="#F5A623"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
