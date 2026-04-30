import { TailwindColor } from "@bennie-ui/types/colors";

export type MetricChartProperties = {
  label: string;
  value: string | number;
  unit: string;
  trend: number;
  sparkline: number[];
  color?: TailwindColor;
  testId?: string;
};
