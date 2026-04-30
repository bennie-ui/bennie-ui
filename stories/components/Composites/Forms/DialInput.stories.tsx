import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DialInput } from "@bennie-ui/inputs";
import type { DialStyleOverride } from "@bennie-ui/inputs";
import { TailwindColor } from "@bennie-ui/types/colors";

const TAILWIND_COLORS: TailwindColor[] = [
  "blue.500", "blue.400", "blue.600",
  "indigo.500", "violet.500", "purple.500",
  "emerald.500", "green.500", "teal.500",
  "amber.500", "yellow.500", "orange.500",
  "rose.500", "red.500", "pink.500",
  "slate.500", "cyan.500", "sky.500",
];

const meta: Meta<typeof DialInput> = {
  title: "Components/Composites/Forms/DialInput",
  component: DialInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number", step: 0.1 } },
    min: { control: "number" },
    max: { control: "number" },
    label: { control: "text" },
    unit: { control: "text" },
    color: { control: "select", options: TAILWIND_COLORS },
    size: { control: { type: "range", min: 80, max: 400, step: 8 } },
    showStepButtons: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof DialInput>;

const Wrapper = (args: React.ComponentProps<typeof DialInput>) => {
  const [value, setValue] = useState(args.value);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <DialInput {...args} value={value} onChange={setValue} />
      <span style={{ fontSize: 11, color: "#64748b", fontVariantNumeric: "tabular-nums" }}>
        committed: {value.toFixed(1)}
      </span>
    </div>
  );
};

// ─── Content variants ────────────────────────────────────────────────────────

export const LabelAndUnit: Story = {
  name: "Label + Unit",
  render: (args) => <Wrapper {...args} />,
  args: { value: 50, min: 0, max: 100, size: 160, color: "blue.500", label: "VAL", unit: "u" },
};

// ─── Step button variants ────────────────────────────────────────────────────

export const FourStepButtons: Story = {
  name: "Step buttons · 4 (small ≠ big)",
  render: (args) => <Wrapper {...args} />,
  args: {
    value: 50, min: 0, max: 100, size: 160, color: "blue.500", label: "VAL", unit: "u",
    showStepButtons: { increments: { small: 0.5, big: 5 } },
  },
};

export const TwoStepButtons: Story = {
  name: "Step buttons · 2 (small = big)",
  render: (args) => <Wrapper {...args} />,
  args: {
    value: 50, min: 0, max: 100, size: 160, color: "blue.500", label: "VAL", unit: "u",
    showStepButtons: { increments: { small: 1, big: 1 } },
  },
};

// ─── Fill state variants ─────────────────────────────────────────────────────

export const AtMidValue: Story = {
  name: "Fill · half (value = 50%)",
  render: (args) => <Wrapper {...args} />,
  args: { value: 50, min: 0, max: 100, size: 160, color: "blue.500", label: "VAL", unit: "u" },
};

// ─── Size variants ───────────────────────────────────────────────────────────

export const DefaultDial: Story = {
  name: "Size · default (160)",
  render: (args) => <Wrapper {...args} />,
  args: { value: 50, min: 0, max: 100, size: 160, color: "blue.500", label: "VAL", unit: "u" },
};

// ─── Color variants ──────────────────────────────────────────────────────────

export const ColorEmerald: Story = {
  name: "Color · emerald.500",
  render: (args) => <Wrapper {...args} />,
  args: { value: 65, min: 0, max: 100, size: 160, color: "emerald.500", label: "VAL", unit: "u" },
};

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: "Playground",
  render: (args) => <Wrapper {...args} />,
  args: {
    value: 50, min: 0, max: 100, size: 160, color: "blue.500", label: "VAL", unit: "u",
    showStepButtons: { increments: { small: 0.1, big: 1 } },
  },
};

// ─── styleOverride variants ───────────────────────────────────────────────────

export const OverrideSvgColors: Story = {
  name: "styleOverride · SVG track + ticks",
  render: (args) => <Wrapper {...args} />,
  args: {
    value: 60, min: 0, max: 100, size: 160, color: "emerald.500", label: "VAL", unit: "u",
    styleOverride: {
      track: "#052e16",
      ticks: { major: "#166534", minor: "#14532d" },
      handleShadow: "#022c22",
    },
  },
};

export const OverrideTextColors: Story = {
  name: "styleOverride · label / value / unit colors",
  render: (args) => <Wrapper {...args} />,
  args: {
    value: 75, min: 0, max: 100, size: 160, color: "violet.500", label: "VAL", unit: "u",
    styleOverride: {
      label: { color: "#a78bfa" },
      value: { color: "#c4b5fd" },
      unit: { color: "#7c3aed" },
    },
  },
};

export const OverrideStepButtons: Story = {
  name: "styleOverride · step button colors",
  render: (args) => <Wrapper {...args} />,
  args: {
    value: 50, min: 0, max: 100, size: 160, color: "amber.500", label: "VAL", unit: "u",
    showStepButtons: { increments: { small: 0.1, big: 1 } },
    styleOverride: {
      stepButton: { background: "#1c1400", color: "#fbbf24", borderColor: "#92400e" },
      saveButton: { background: "#d97706", color: "#fff" },
    },
  },
};

export const OverrideAdaptive: Story = {
  name: "styleOverride · adaptive (base + dark)",
  render: (args) => <Wrapper {...args} />,
  args: {
    value: 55, min: 0, max: 100, size: 160, color: "sky.500", label: "VAL", unit: "u",
    styleOverride: {
      track:  { base: "#e0f2fe", dark: "#082f49" },
      ticks:  { major: { base: "#7dd3fc", dark: "#075985" }, minor: { base: "#bae6fd", dark: "#0c4a6e" } },
      label:  { color: { base: "#0284c7", dark: "#38bdf8" } },
      value:  { color: { base: "#0c4a6e", dark: "#e0f2fe" } },
      unit:   { color: { base: "#0369a1", dark: "#7dd3fc" } },
    },
  },
};

export const OverrideAll: Story = {
  name: "styleOverride · full override",
  render: (args) => <Wrapper {...args} />,
  args: {
    value: 40, min: 0, max: 100, size: 180, color: "rose.500", label: "VAL", unit: "u",
    showStepButtons: { increments: { small: 1, big: 5 } },
    styleOverride: {
      track: "#1a0a0a",
      ticks: { major: "#7f1d1d", minor: "#450a0a" },
      handleShadow: "#0c0404",
      label: { color: "#fca5a5" },
      value: { color: "#fef2f2" },
      unit: { color: "#f87171" },
      stepButton: { background: "#1a0a0a", color: "#fca5a5", borderColor: "#7f1d1d" },
      saveButton: { background: "#ef4444", color: "#fff" },
    } satisfies DialStyleOverride,
  },
};
