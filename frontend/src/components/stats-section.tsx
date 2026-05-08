import { CircleDollarSign, Users, Tractor, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { StatCard } from "./stat-card";

// fadeUp is reused for headings/paragraphs throughout the section.
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// cardGrid staggers its children (the four stat cards) 0.1s apart.
const cardGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// Each card slides up and fades in individually.
const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

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
        {/* ── Heading block — fades up when section enters viewport ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          // once:true means the animation won't re-play when scrolling back up
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2
            id="stats-heading"
            className="text-2xl font-bold text-[#003087] sm:text-[1.6rem]"
          >
            Setia Tani At A Glance
          </h2>
          <div className="mt-2 h-[3px] w-10 bg-[#F5A623]" aria-hidden="true" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600">
            Setia Tani is one of Malaysia's leading integrated palm oil producers,
            managing extensive oil palm estates and modern processing mills to
            deliver high-quality Crude Palm Oil (CPO) and Palm Kernel products
            to domestic and international markets.
          </p>
        </motion.div>

        {/* ── 2 × 2 metric grid — each card staggers in ── */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2"
          variants={cardGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STATS.map((stat) => (
            // Wrapping StatCard in motion.div keeps StatCard itself free of animation
            // concerns (separation of concerns — the parent decides layout behaviour).
            <motion.div key={stat.label} variants={cardItem}>
              <StatCard
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
