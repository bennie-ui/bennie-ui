import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ButtonToggle } from "@bennie-ui/button-toggle";
import type { ButtonToggleStyleOverride } from "@bennie-ui/button-toggle";

const meta: Meta<typeof ButtonToggle> = {
  title: "Components/Primitives/ButtonToggle",
  component: ButtonToggle,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ButtonToggle>;

// ─── Graph / Table (primary use case) ────────────────────────────────────────

export const GraphTable: Story = {
  name: "Graph / Table",
  render: () => {
    const [value, setValue] = useState("graph");
    return (
      <ButtonToggle
        value={value}
        onChange={setValue}
        options={[
          { value: "graph", icon: "PresentationChartLineIcon", label: "Graph" },
          { value: "table", icon: "TableCellsIcon", label: "Table" },
        ]}
      />
    );
  },
};

// ─── Icon only (no label) ─────────────────────────────────────────────────────

export const IconOnly: Story = {
  name: "Icon only",
  render: () => {
    const [value, setValue] = useState("chart");
    return (
      <ButtonToggle
        value={value}
        onChange={setValue}
        options={[
          { value: "chart", icon: "ChartBarIcon" },
          { value: "list", icon: "ListBulletIcon" },
          { value: "grid", icon: "Squares2X2Icon" },
        ]}
      />
    );
  },
};

// ─── Three options ────────────────────────────────────────────────────────────

export const ThreeOptions: Story = {
  name: "Three options",
  render: () => {
    const [value, setValue] = useState("day");
    return (
      <ButtonToggle
        value={value}
        onChange={setValue}
        options={[
          { value: "day", icon: "SunIcon", label: "Day" },
          { value: "week", icon: "CalendarDaysIcon", label: "Week" },
          { value: "month", icon: "CalendarIcon", label: "Month" },
        ]}
      />
    );
  },
};

// ─── Label only (no icon) ─────────────────────────────────────────────────────

export const LabelOnly: Story = {
  name: "Label only (no icon)",
  render: () => {
    const [value, setValue] = useState("1M");
    return (
      <ButtonToggle
        value={value}
        onChange={setValue}
        options={[
          { value: "1W", label: "1W" },
          { value: "1M", label: "1M" },
          { value: "3M", label: "3M" },
          { value: "1Y", label: "1Y" },
        ]}
      />
    );
  },
};

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: "Playground",
  render: () => {
    const [value, setValue] = useState("list");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <ButtonToggle
          value={value}
          onChange={setValue}
          options={[
            { value: "list", icon: "ListBulletIcon", label: "List" },
            { value: "grid", icon: "Squares2X2Icon", label: "Grid" },
            { value: "map", icon: "MapIcon", label: "Map" },
          ]}
        />
        <span style={{ fontSize: 11, color: "#64748b" }}>active: {value}</span>
      </div>
    );
  },
};

// ─── styleOverride variants ───────────────────────────────────────────────────

export const OverrideActiveColor: Story = {
  name: "styleOverride · active color",
  render: () => {
    const [value, setValue] = useState("grid");
    return (
      <ButtonToggle
        value={value}
        onChange={setValue}
        styleOverride={{
          active: { color: "#10b981", background: "rgba(16,185,129,0.15)" },
        }}
        options={[
          { value: "list", icon: "ListBulletIcon", label: "List" },
          { value: "grid", icon: "Squares2X2Icon", label: "Grid" },
          { value: "map", icon: "MapIcon", label: "Map" },
        ]}
      />
    );
  },
};

export const OverrideWrapper: Story = {
  name: "styleOverride · wrapper style",
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <ButtonToggle
        value={value}
        onChange={setValue}
        styleOverride={{
          wrapper: { background: "#0f172a", borderColor: "#1e293b" },
          btn: { color: "#94a3b8" },
          active: { color: "#f8fafc", background: "#1e293b" },
        }}
        options={[
          { value: "a", label: "Alpha" },
          { value: "b", label: "Beta" },
          { value: "c", label: "Gamma" },
        ]}
      />
    );
  },
};

export const OverrideAdaptive: Story = {
  name: "styleOverride · adaptive (base + dark)",
  render: () => {
    const [value, setValue] = useState("a");
    const override: ButtonToggleStyleOverride = {
      wrapper: {
        background: { base: "#f0fdf4", dark: "#052e16" },
        borderColor: { base: "#bbf7d0", dark: "#166534" },
      },
      btn: {
        color: { base: "#4b5563", dark: "#9ca3af" },
      },
      active: {
        color: { base: "#15803d", dark: "#4ade80" },
        background: { base: "#dcfce7", dark: "#14532d" },
      },
    };
    return (
      <ButtonToggle
        value={value}
        onChange={setValue}
        styleOverride={override}
        options={[
          { value: "a", label: "Alpha" },
          { value: "b", label: "Beta" },
          { value: "c", label: "Gamma" },
        ]}
      />
    );
  },
};
