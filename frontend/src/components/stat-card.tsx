import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  /** A Lucide icon component — passed as a value, not JSX, so we can render it */
  icon: LucideIcon;
  /** The headline metric, e.g. "RM4.5 Billion" */
  value: string;
  /** Descriptive label shown beneath the value */
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    // Flex row: icon badge on the left, text on the right
    <div className="flex items-center gap-5">
      {/* Circular icon badge
          - Double-border effect: navy ring via `ring`, gold inner via `border`
          - `shrink-0` prevents the circle from squishing when the label text is long */}
      <div
        className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 border-[#F5A623] ring-2 ring-[#003087] ring-offset-1 ring-offset-gray-50"
        aria-hidden="true"
      >
        <Icon className="h-7 w-7 text-[#F5A623]" strokeWidth={1.5} />
      </div>

      {/* Text block */}
      <div>
        {/* Metric value in Scientex gold */}
        <p className="text-xl font-bold leading-tight text-[#F5A623]">{value}</p>
        {/* Label in a dark navy so it reads clearly on the light gray background */}
        <p className="mt-0.5 text-sm font-medium text-[#003087]">{label}</p>
      </div>
    </div>
  );
}
