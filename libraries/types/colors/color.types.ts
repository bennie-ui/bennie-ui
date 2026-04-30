type TailwindShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

type TailwindColorName =
  | "slate" | "gray" | "zinc" | "neutral" | "stone"
  | "red" | "orange" | "amber" | "yellow" | "lime"
  | "green" | "emerald" | "teal" | "cyan" | "sky"
  | "blue" | "indigo" | "violet" | "purple" | "fuchsia"
  | "pink" | "rose";

type TailwindScaledColor = `${TailwindColorName}.${TailwindShade}`;

export type TailwindColor =
  | TailwindScaledColor
  | "white"
  | "black"
  | "transparent"
  | "inherit"
  | "current";

