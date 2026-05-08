import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40",
        className,
      )}
      {...props}
    />
  );
}
