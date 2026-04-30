import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ButtonGroup } from "@bennie-ui/button-group";
import type { ButtonGroupStyleOverride } from "@bennie-ui/button-group";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Primitives/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

const options = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

// ─── Single selection ─────────────────────────────────────────────────────────

export const Single: Story = {
  name: "Single selection",
  render: () => {
    const [value, setValue] = useState("a");
    return <ButtonGroup options={options} value={value} onChange={setValue} />;
  },
};

export const SingleNoDefault: Story = {
  name: "Single · no default",
  render: () => {
    const [value, setValue] = useState("");
    return <ButtonGroup options={options} value={value} onChange={setValue} />;
  },
};

// ─── Multiple selection ───────────────────────────────────────────────────────

export const Multiple: Story = {
  name: "Multiple selection",
  render: () => {
    const [value, setValue] = useState<string[]>(["a"]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <ButtonGroup multiple options={options} value={value} onChange={setValue} />
        <span style={{ fontSize: 11, color: "#64748b" }}>active: [{value.join(", ")}]</span>
      </div>
    );
  },
};

export const MultipleAllSelected: Story = {
  name: "Multiple · all selected",
  render: () => {
    const [value, setValue] = useState<string[]>(["a", "b", "c"]);
    return <ButtonGroup multiple options={options} value={value} onChange={setValue} />;
  },
};

export const MultipleNoneSelected: Story = {
  name: "Multiple · none selected",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <ButtonGroup multiple options={options} value={value} onChange={setValue} />;
  },
};

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const ManyOptions: Story = {
  name: "Many options",
  render: () => {
    const [value, setValue] = useState("a");
    const many = ["A", "B", "C", "D", "E", "F"].map((l) => ({ value: l.toLowerCase(), label: `Option ${l}` }));
    return <ButtonGroup options={many} value={value} onChange={setValue} />;
  },
};

// ─── styleOverride variants ───────────────────────────────────────────────────

export const OverrideActiveColor: Story = {
  name: "styleOverride · active color",
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <ButtonGroup
        options={options}
        value={value}
        onChange={setValue}
        styleOverride={{
          active: { color: "#10b981", background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.4)" },
        }}
      />
    );
  },
};

export const OverrideInactiveStyle: Story = {
  name: "styleOverride · inactive style",
  render: () => {
    const [value, setValue] = useState("b");
    return (
      <ButtonGroup
        options={options}
        value={value}
        onChange={setValue}
        styleOverride={{
          btn: { color: "#94a3b8", background: "#0f172a", borderColor: "#1e293b" },
          active: { color: "#f8fafc", background: "#1e293b", borderColor: "#334155" },
        }}
      />
    );
  },
};

export const OverrideGap: Story = {
  name: "styleOverride · gap",
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <ButtonGroup
        options={options}
        value={value}
        onChange={setValue}
        styleOverride={{ gap: "12px" }}
      />
    );
  },
};

export const OverrideAdaptive: Story = {
  name: "styleOverride · adaptive (base + dark)",
  render: () => {
    const [value, setValue] = useState("a");
    const override: ButtonGroupStyleOverride = {
      btn: {
        color: { base: "#64748b", dark: "#475569" },
        background: { base: "#f8fafc", dark: "#0f172a" },
        borderColor: { base: "#e2e8f0", dark: "#1e293b" },
      },
      active: {
        color: { base: "#7c3aed", dark: "#a78bfa" },
        background: { base: "rgba(124,58,237,0.1)", dark: "rgba(167,139,250,0.15)" },
        borderColor: { base: "rgba(124,58,237,0.4)", dark: "rgba(167,139,250,0.4)" },
      },
    };
    return <ButtonGroup options={options} value={value} onChange={setValue} styleOverride={override} />;
  },
};
