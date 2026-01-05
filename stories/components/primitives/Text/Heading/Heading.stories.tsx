import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@bennie-ui/text";
import { css } from 'styled-system/css';

const meta: Meta<typeof Heading> = {
  title: "Components/Primitives/Text/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    children: "Heading 1",
    tag: "h1",
  },
};

export const H2: Story = {
  args: {
    children: "Heading 2",
    tag: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "Heading 3",
    tag: "h3",
  },
};

export const H4: Story = {
  args: {
    children: "Heading",
    tag: "h4",
  },
};

export const H5: Story = {
  args: {
    children: "Heading 5",
    tag: "h5",
  },
};

export const H6: Story = {
  args: {
    children: "Heading 6",
    tag: "h6",
  },
};


export const GradientHeading: Story = {
  args: {
    children: "Gradient Heading with Panda CSS",
    tag: "h1",
    className: css({
      background: "linear-gradient(to right, blue.400, purple.600)",
      backgroundClip: "text",
      color: "transparent",
    }),
  },
};

export const CustomColorHeading: Story = {
  args: {
    children: "Custom Colored Heading",
    tag: "h2",
    className: css({
      color: "emerald.600",
      borderBottom: "2px solid",
      borderColor: "emerald.300",
      paddingBottom: "2",
    }),
  },
};

export const StyledH3: Story = {
  args: {
    children: "Styled H3 with Shadow",
    tag: "h3",
    className: css({
      color: "indigo.700",
      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
      letterSpacing: "wide",
    }),
  },
};

export const ResponsiveHeading: Story = {
  args: {
    children: "This heading can be styled responsively",
    tag: "h1",
    className: css({
      fontSize: { base: "2xl", md: "4xl", lg: "5xl" },
      color: "red.600",
      fontWeight: "bold",
    }),
  },
};

export const WithCustomSpacing: Story = {
  args: {
    children: "Heading with Custom Spacing",
    tag: "h2",
    className: css({
      marginY: "8",
      paddingX: "4",
      backgroundColor: "gray.100",
      borderRadius: "md",
    }),
  },
};

export const OverrideDefaults: Story = {
  args: {
    children: "This H1 looks different",
    tag: "h1",
    className: css({
      fontSize: "sm", // Override the default 3xl
      fontWeight: "light", // Override the default semibold
      color: "gray.500",
      textTransform: "uppercase",
      letterSpacing: "widest",
    }),
  },
};
