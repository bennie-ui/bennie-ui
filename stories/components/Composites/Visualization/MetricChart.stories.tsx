import type { Meta, StoryObj } from "@storybook/react";
import { MetricChart } from "@bennie-ui/visualization";
import { TailwindColor } from "@bennie-ui/types/colors";

const TAILWIND_COLORS: TailwindColor[] = [
  "blue.500", "indigo.500", "violet.500", "purple.500",
  "emerald.500", "green.500", "teal.500",
  "amber.500", "yellow.500", "orange.500",
  "rose.500", "red.500", "pink.500",
  "cyan.500", "sky.500",
];

const risingSparkline  = [38, 39, 40, 40.5, 41, 41.2, 41.8, 42, 42, 42];
const fallingSparkline = [55, 53, 51, 49.5, 48, 47.2, 46.8, 46, 45.5, 45];
const flatSparkline    = [100, 101, 99, 100, 102, 100, 101, 100, 99, 100];

const meta: Meta<typeof MetricChart> = {
  title: "Components/Composites/Visualization/MetricChart",
  component: MetricChart,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    unit: { control: "text" },
    trend: { control: { type: "number", step: 0.1 } },
    color: { control: "select", options: TAILWIND_COLORS },
  },
};

export default meta;
type Story = StoryObj<typeof MetricChart>;

// ─── Trend direction ──────────────────────────────────────────────────────────

export const TrendDown: Story = {
  name: "Trend — down",
  args: {
    label: "Errors",
    value: "45",
    unit: "/hr",
    trend: -18.0,
    sparkline: fallingSparkline,
    color: "blue.500",
  },
};

export const TrendUp: Story = {
  name: "Trend — up",
  args: {
    label: "Throughput",
    value: "42",
    unit: "req/s",
    trend: 10.5,
    sparkline: risingSparkline,
    color: "emerald.500",
  },
};

export const TrendFlat: Story = {
  name: "Trend — flat",
  args: {
    label: "Uptime",
    value: "100",
    unit: "%",
    trend: 0,
    sparkline: flatSparkline,
    color: "teal.500",
  },
};

// ─── Unit variants ────────────────────────────────────────────────────────────

export const Percentage: Story = {
  name: "Unit — percentage",
  args: {
    label: "Conversion",
    value: "3.4",
    unit: "%",
    trend: 2.1,
    sparkline: risingSparkline,
    color: "violet.500",
  },
};

export const Currency: Story = {
  name: "Unit — currency",
  args: {
    label: "Revenue",
    value: "12,400",
    unit: "$",
    trend: 8.3,
    sparkline: risingSparkline,
    color: "amber.500",
  },
};

export const Count: Story = {
  name: "Unit — count",
  args: {
    label: "Active users",
    value: "1,284",
    unit: "users",
    trend: -3.2,
    sparkline: fallingSparkline,
    color: "rose.500",
  },
};

// ─── Color variants ───────────────────────────────────────────────────────────

export const ColorEmerald: Story = {
  name: "Color — emerald",
  args: { ...TrendUp.args, color: "emerald.500" },
};

export const ColorViolet: Story = {
  name: "Color — violet",
  args: { ...TrendUp.args, color: "violet.500" },
};

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: "Metric",
    value: "42.0",
    unit: "units",
    trend: 2.5,
    sparkline: risingSparkline,
    color: "blue.500",
  },
};
