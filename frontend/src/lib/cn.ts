import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // clsx builds a single className string from conditional values,
  // then tailwind-merge removes conflicting Tailwind utilities (e.g. p-2 vs p-4).
  return twMerge(clsx(inputs));
}
