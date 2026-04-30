import type { Meta, StoryObj } from "@storybook/react";
import { CompositionLineChart, CompositionEntry, LineSeries } from "@bennie-ui/visualization";

const today = new Date();
const daysAgo = (n: number): string => {
  const d = new Date(today);
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
};

const history: CompositionEntry[] = [
  { date: daysAgo(90), a: 42, b: 28, c: 14 },
  { date: daysAgo(76), a: 44, b: 27, c: 15 },
  { date: daysAgo(62), a: 46, b: 25, c: 17 },
  { date: daysAgo(48), a: 47, b: 24, c: 18 },
  { date: daysAgo(34), a: 49, b: 23, c: 19 },
  { date: daysAgo(20), a: 51, b: 22, c: 20 },
  { date: daysAgo(14), a: 52, b: 21, c: 21 },
  { date: daysAgo(7),  a: 53, b: 20, c: 22 },
  { date: daysAgo(3),  a: 54, b: 19, c: 23 },
  { date: daysAgo(1),  a: 55, b: 18, c: 24 },
  { date: daysAgo(0),  a: 56, b: 17, c: 25 },
];

const defaultSeries: LineSeries[] = [
  { key: "a", name: "Series A", color: "blue.500" },
  { key: "b", name: "Series B", color: "amber.500" },
  { key: "c", name: "Series C", color: "violet.500", dashed: true },
];

const meta: Meta<typeof CompositionLineChart> = {
  title: "Components/Composites/Visualization/CompositionLineChart",
  component: CompositionLineChart,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CompositionLineChart>;

// ─── Data ranges ──────────────────────────────────────────────────────────────

export const TwoWeeks: Story = {
  name: "2 weeks",
  args: {
    title: "Multi-series chart",
    series: defaultSeries,
    data: history.slice(-7),
  },
};

export const OneMonth: Story = {
  name: "1 month",
  args: {
    title: "Multi-series chart",
    series: defaultSeries,
    data: history.slice(-8),
  },
};

export const ThreeMonths: Story = {
  name: "3 months",
  args: {
    title: "Multi-series chart",
    series: defaultSeries,
    data: history,
  },
};

// ─── Series variants ──────────────────────────────────────────────────────────

export const SingleSeries: Story = {
  name: "Single series",
  args: {
    title: "Series A only",
    series: [{ key: "a", name: "Series A", color: "blue.500" }],
    data: history,
  },
};

export const TwoSeries: Story = {
  name: "Two series",
  args: {
    title: "Series A + B",
    series: [
      { key: "a", name: "Series A", color: "blue.500" },
      { key: "b", name: "Series B", color: "amber.500" },
    ],
    data: history,
  },
};

export const DashedSeries: Story = {
  name: "Dashed series",
  args: {
    title: "Dashed line variant",
    series: [
      { key: "a", name: "Actual", color: "emerald.500" },
      { key: "b", name: "Target", color: "slate.400", dashed: true },
    ],
    data: history,
  },
};

// ─── Plateau data ─────────────────────────────────────────────────────────────

export const Plateau: Story = {
  name: "Plateau — flat trend",
  args: {
    title: "Stable period",
    series: defaultSeries,
    data: [
      { date: daysAgo(14), a: 50, b: 20, c: 30 },
      { date: daysAgo(12), a: 51, b: 20, c: 30 },
      { date: daysAgo(10), a: 50, b: 21, c: 29 },
      { date: daysAgo(8),  a: 50, b: 20, c: 30 },
      { date: daysAgo(6),  a: 51, b: 20, c: 30 },
      { date: daysAgo(4),  a: 50, b: 21, c: 29 },
      { date: daysAgo(2),  a: 50, b: 20, c: 30 },
    ],
  },
};

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    title: "Multi-series chart",
    series: defaultSeries,
    data: history.slice(-7),
  },
};
