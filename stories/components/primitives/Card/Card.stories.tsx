import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeaderRight, CardContent, CardFooter, CardFooterLeft, CardFooterRight } from "@bennie-ui/card";
import type { CardStyleOverride } from "@bennie-ui/card";
import { css } from "styled-system/css";

const meta: Meta<typeof Card> = {
  title: "Components/Primitives/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const TitleOnly: Story = {
  name: "Title only",
  render: () => <Card title="Section title" />,
};

export const TitleWithRight: Story = {
  name: "Title + right slot",
  render: () => (
    <Card title="Section A">
      <CardHeaderRight>
        <span className={css({ color: "blue.400", textTransform: "none" })}>View all</span>
      </CardHeaderRight>
    </Card>
  ),
};

export const TitleAndContent: Story = {
  name: "Title + Content",
  render: () => (
    <Card title="Section title">
      <CardContent>
        <p style={{ color: "#94A3B8", fontSize: 14 }}>Content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const FullCard: Story = {
  name: "Title + Content + Footer",
  render: () => (
    <Card title="Full card">
      <CardHeaderRight>Slot right</CardHeaderRight>
      <CardContent>
        <p style={{ color: "#94A3B8", fontSize: 14 }}>Main body of the card.</p>
      </CardContent>
      <CardFooter>
        <CardFooterLeft>Footer left</CardFooterLeft>
        <CardFooterRight>Footer right</CardFooterRight>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  name: "Content only",
  render: () => (
    <Card>
      <CardContent>
        <p style={{ color: "#94A3B8", fontSize: 14 }}>Card without a title.</p>
      </CardContent>
    </Card>
  ),
};

export const CustomClassName: Story = {
  name: "Custom className override",
  render: () => (
    <Card title="Overridden border + padding" className={css({ borderColor: "blue.500", padding: "8" })}>
      <CardContent>
        <p style={{ color: "#94A3B8", fontSize: 14 }}>className merges with card defaults.</p>
      </CardContent>
    </Card>
  ),
};

// ─── styleOverride variants ───────────────────────────────────────────────────

export const OverrideBackground: Story = {
  name: "styleOverride · background",
  render: () => (
    <Card
      title="Custom background"
      styleOverride={{ background: "#0f172a", borderColor: "#1e293b" }}
    >
      <CardContent>
        <p style={{ color: "#94A3B8", fontSize: 14 }}>Forced dark background regardless of theme.</p>
      </CardContent>
    </Card>
  ),
};

export const OverrideHeaderColor: Story = {
  name: "styleOverride · header color",
  render: () => (
    <Card
      title="Accent header"
      styleOverride={{ header: { color: "#3b82f6" } }}
    >
      <CardHeaderRight>Slot right</CardHeaderRight>
      <CardContent>
        <p style={{ color: "#94A3B8", fontSize: 14 }}>Header text uses override color.</p>
      </CardContent>
    </Card>
  ),
};

export const OverrideAdaptive: Story = {
  name: "styleOverride · adaptive (base + dark)",
  render: () => (
    <Card
      title="Adaptive card"
      styleOverride={{
        background:  { base: "#f0f9ff", dark: "#0c1a2e" },
        borderColor: { base: "#bae6fd", dark: "#1e3a5f" },
        header: { color: { base: "#0369a1", dark: "#38bdf8" } },
      }}
    >
      <CardContent>
        <p style={{ color: "#94A3B8", fontSize: 14 }}>Colors change when you toggle the theme.</p>
      </CardContent>
    </Card>
  ),
};

export const OverrideAll: Story = {
  name: "styleOverride · full override",
  render: () => {
    const override: CardStyleOverride = {
      background: "#0d1117",
      borderColor: "#30363d",
      header: { color: "#58a6ff" },
    };
    return (
      <Card title="Card title" styleOverride={override}>
        <CardHeaderRight>v2.0</CardHeaderRight>
        <CardContent>
          <p style={{ color: "#8b949e", fontSize: 14 }}>Full card with all tokens overridden.</p>
        </CardContent>
        <CardFooter>
          <CardFooterLeft>Footer left</CardFooterLeft>
          <CardFooterRight>Footer right</CardFooterRight>
        </CardFooter>
      </Card>
    );
  },
};
