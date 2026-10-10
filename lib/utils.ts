import { type ClassValue, clsx } from "clsx";

// Lightweight cn utility (no need for tailwind-merge for this project scope)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// clsx is bundled with many packages, but let's implement a minimal version
// to avoid adding another dependency
export { clsx } from "clsx";
