import { CircleDollarSign, Users, Cog, Home } from "lucide-react";
import { StatCard } from "./stat-card";

// Each entry maps directly to one of the four metric blocks in the screenshot.
// Icon choices are the closest Lucide equivalents to the circular-badge icons
// shown in the Scientex design (exact SVG icons would need a licensed asset).
const STATS = [
  {
    icon: CircleDollarSign,
    value: "RM4.5 Billion",
    label: "Revenue",
  },
  {
    icon: Users,
    value: "3,710",
    label: "Employees",
  },
  {
    icon: Cog,
    value: "450,000 Metric Tons",
    label: "Manufacturing Capacity",
  },
  {
    icon: Home,
    value: "45,356",
    label: "Completed Affordable Homes",
  },
] as const;

export function StatsSection() {
  return (
    <section
      className="bg-gray-50 py-14"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* ── Heading block ── */}
        <h2
          id="stats-heading"
          className="text-2xl font-bold text-[#003087] sm:text-[1.6rem]"
        >
          Scientex At A Glance
        </h2>

        {/* Short gold accent bar — visually anchors the heading like in the screenshot */}
        <div
          className="mt-2 h-[3px] w-10 bg-[#F5A623]"
          aria-hidden="true"
        />

        {/* Body copy from the Scientex website */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600">
          Scientex is one of the top producers of stretch film and a leading
          player in the flexible plastic packaging industry, as well as a
          reputable developer of affordable yet quality homes in Malaysia.
        </p>

        {/* ── 2 × 2 metric grid ──
            On mobile the cards stack in a single column; on sm+ they expand to
            two columns, mirroring the screenshot layout. */}
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
