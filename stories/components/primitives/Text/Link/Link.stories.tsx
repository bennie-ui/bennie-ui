import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@bennie-ui/text";
import { css } from 'styled-system/css'

const meta: Meta<typeof Link> = {
  title: "Components/Primitives/Text/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "I am a link",
    href: "#",
    onClick: () => {
      alert("i have an event attached");
    },
  },
};


export const Styled: Story = {
  args: {
    children: "Styled Link with Panda CSS",
    href: "#",
    className: css({
      color: "blue.600",
      textDecoration: "underline",
      _hover: {
        color: "blue.800",
      },
    }),
  },
};


export const ExternalLink: Story = {
  args: {
    children: "External Link (opens in new tab)",
    href: "https://example.com",
    target: "_blank",
    className: css({
      color: "purple.600",
      fontWeight: "semibold",
      textDecoration: "none",
      _hover: {
        textDecoration: "underline",
      },
    })
  },
};

export const CustomColors: Story = {
  args: {
    children: "Custom Colored Link",
    href: "#",
    className: css({
      color: "emerald.500",
      fontSize: "lg",
      fontWeight: "bold",
      _hover: {
        color: "emerald.700",
        textDecoration: "underline",
      },
    })

  },
};

export const WithIcon: Story = {
  args: {
    children: "→ Link with arrow",
    href: "#",
    className: css({
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
      color: "red.500",
      _hover: {
        color: "red.700",
      },
    }),
  },
};
