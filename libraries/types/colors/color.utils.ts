import { TailwindColor } from "./color.types";
import { TAILWIND_PALETTE } from "./color.palette";

// "blue.500" → "#3b82f6" via the static palette lookup.
// Named keywords (white, black, transparent, inherit, current) pass through as-is.
export const toHex = (color: TailwindColor): string => {
  if (!color.includes(".")) return color;
  const [name, shade] = color.split(".");
  return TAILWIND_PALETTE[name]?.[Number(shade)] ?? color;
};
