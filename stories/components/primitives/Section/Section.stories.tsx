import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "@bennie-ui/section";
import { css } from "styled-system/css";

const meta: Meta<typeof Section> = {
  title: "Components/Primitives/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    tag: {
      control: "select",
      options: ["div", "section", "article", "aside", "nav", "main", "header", "footer", "pre", "code"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Basic: Story = {
  args: {
    children: "Basic Section",
  },
};

export const WithPadding: Story = {
  args: {
    children: "Section with padding",
    css: {
      padding: "4",
      backgroundColor: "gray.100",
    },
  },
};

export const WithBorder: Story = {
  args: {
    children: "Section with border",
    css: {
      padding: "4",
      border: "2px solid",
      borderColor: "blue.500",
      borderRadius: "md",
    },
  },
};

export const Card: Story = {
  args: {
    children: "Card-style Section",
    css: {
      padding: "6",
      backgroundColor: "white",
      borderRadius: "lg",
      boxShadow: "xl",
      border: "1px solid",
      borderColor: "gray.200",
    },
  },
};

export const FlexContainer: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: "1rem", backgroundColor: "#e2e8f0" }}>Item 1</div>
        <div style={{ padding: "1rem", backgroundColor: "#cbd5e0" }}>Item 2</div>
        <div style={{ padding: "1rem", backgroundColor: "#a0aec0" }}>Item 3</div>
      </>
    ),
    css: {
      display: "flex",
      gap: "4",
      padding: "4",
      backgroundColor: "gray.50",
    },
  },
};

export const GridContainer: Story = {
  args: {
    children: (
      <>
        <div style={{ padding: "1rem", backgroundColor: "#fef3c7" }}>Grid 1</div>
        <div style={{ padding: "1rem", backgroundColor: "#fde68a" }}>Grid 2</div>
        <div style={{ padding: "1rem", backgroundColor: "#fcd34d" }}>Grid 3</div>
        <div style={{ padding: "1rem", backgroundColor: "#fbbf24" }}>Grid 4</div>
      </>
    ),
    css: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "4",
      padding: "4",
      backgroundColor: "gray.50",
    },
  },
};

export const Clickable: Story = {
  args: {
    children: "Click me!",
    onClick: () => alert("Section clicked!"),
    css: {
      padding: "4",
      backgroundColor: "blue.100",
      borderRadius: "md",
      cursor: "pointer",
      _hover: {
        backgroundColor: "blue.200",
      },
    },
  },
};

export const SemanticSection: Story = {
  args: {
    tag: "section",
    children: "This is a semantic <section> element",
    css: {
      padding: "4",
      backgroundColor: "purple.100",
      borderRadius: "md",
    },
  },
};

export const SemanticArticle: Story = {
  args: {
    tag: "article",
    children: "This is a semantic <article> element",
    css: {
      padding: "4",
      backgroundColor: "green.100",
      borderRadius: "md",
    },
  },
};

export const CodeBlock: Story = {
  args: {
    tag: "pre",
    children: (
      <code>
        {`const greeting = "Hello, World!";
console.log(greeting);`}
      </code>
    ),
    css: {
      padding: "4",
      backgroundColor: "gray.900",
      color: "green.400",
      borderRadius: "md",
      fontFamily: "mono",
      fontSize: "sm",
      overflow: "auto",
    },
  },
};

const gradientCardStyle = css({
  padding: "8",
  background: "linear-gradient(135deg, purple.500, pink.500)",
  color: "white",
  borderRadius: "xl",
  boxShadow: "2xl",
});

export const GradientCard: Story = {
  args: {
    children: "Beautiful Gradient Card",
    className: gradientCardStyle,
  },
};

export const ResponsiveSection: Story = {
  args: {
    children: "This section changes padding on different screen sizes",
    css: {
      padding: { base: "2", md: "4", lg: "8" },
      backgroundColor: "indigo.100",
      borderRadius: "lg",
      fontSize: { base: "sm", md: "md", lg: "lg" },
    },
  },
};

export const WithCustomSpacing: Story = {
  args: {
    children: "Section with custom margin and padding",
    css: {
      margin: "8",
      padding: "6",
      backgroundColor: "amber.100",
      borderRadius: "md",
      border: "2px dashed",
      borderColor: "amber.500",
    },
  },
};

export const FullWidthHero: Story = {
  args: {
    tag: "header",
    children: "Hero Section",
    css: {
      width: "full",
      padding: "16",
      backgroundColor: "slate.800",
      color: "white",
      textAlign: "center",
      fontSize: "4xl",
      fontWeight: "bold",
    },
  },
};
