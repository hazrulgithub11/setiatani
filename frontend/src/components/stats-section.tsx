import { CircleDollarSign, Users, Tractor, Leaf } from "lucide-react";
import { StatCard } from "./stat-card";

const STATS = [
  {
    icon: CircleDollarSign,
    value: "RM 1.2 Billion",
    label: "Annual Revenue",
  },
  {
    icon: Users,
    value: "5,200+",
    label: "Employees",
  },
  {
    icon: Tractor,
    value: "85,000 Hectares",
    label: "Oil Palm Planted Area",
  },
  {
    icon: Leaf,
    value: "280,000 Metric Tons",
    label: "CPO Production Per Year",
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
          Setia Tani At A Glance
        </h2>

        {/* Short gold accent bar — visually anchors the heading */}
        <div
          className="mt-2 h-[3px] w-10 bg-[#F5A623]"
          aria-hidden="true"
        />

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600">
          Setia Tani is one of Malaysia's leading integrated palm oil producers,
          managing extensive oil palm estates and modern processing mills to
          deliver high-quality Crude Palm Oil (CPO) and Palm Kernel products
          to domestic and international markets.
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
