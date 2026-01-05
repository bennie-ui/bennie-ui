import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@bennie-ui/button";
import { css } from "styled-system/css";

const meta: Meta<typeof Button> = {
  title: "Components/Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Variant Examples
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

// export const Secondary: Story = {
//   args: {
//     variant: "secondary",
//     children: "Secondary Button",
//   },
// };
//
// export const Success: Story = {
//   args: {
//     variant: "success",
//     children: "Success Button",
//   },
// };
//
// export const Danger: Story = {
//   args: {
//     variant: "danger",
//     children: "Danger Button",
//   },
// };
//
// export const Warning: Story = {
//   args: {
//     variant: "warning",
//     children: "Warning Button",
//   },
// };
//
// export const Info: Story = {
//   args: {
//     variant: "info",
//     children: "Info Button",
//   },
// };
//
// export const Light: Story = {
//   args: {
//     variant: "light",
//     children: "Light Button",
//   },
// };
//
// export const Dark: Story = {
//   args: {
//     variant: "dark",
//     children: "Dark Button",
//   },
// };
//
// export const Neutral: Story = {
//   args: {
//     variant: "neutral",
//     children: "Neutral Button",
//   },
// };
//
// // Size Examples
// export const SmallButton: Story = {
//   args: {
//     variant: "primary",
//     size: "small",
//     children: "Small Button",
//   },
// };
//
// export const MediumButton: Story = {
//   args: {
//     variant: "primary",
//     size: "medium",
//     children: "Medium Button",
//   },
// };
//
// export const LargeButton: Story = {
//   args: {
//     variant: "primary",
//     size: "large",
//     children: "Large Button",
//   },
// };
//
// // State Examples
// export const DisabledButton: Story = {
//   args: {
//     variant: "primary",
//     children: "Disabled Button",
//     disabled: true,
//   },
// };
//
// export const FullWidthButton: Story = {
//   args: {
//     variant: "success",
//     children: "Full Width Button",
//     fullWidth: true,
//   },
// };
//
// // Custom Styled Examples
// const roundedStyle = css({
//   borderRadius: "full",
//   paddingX: "8",
//   boxShadow: "lg",
// });
//
// export const RoundedButton: Story = {
//   args: {
//     variant: "primary",
//     children: "Rounded Button",
//     className: roundedStyle,
//   },
// };
//
// export const CustomStyledButton: Story = {
//   args: {
//     variant: "info",
//     children: "Custom Styled",
//     css: {
//       borderRadius: "xl",
//       fontSize: "lg",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//       letterSpacing: "wider",
//       boxShadow: "2xl",
//     },
//   },
// };
//
// export const OutlineButton: Story = {
//   args: {
//     children: "Outline Button",
//     css: {
//       backgroundColor: "transparent",
//       color: "blue.600",
//       border: "2px solid",
//       borderColor: "blue.600",
//       _hover: {
//         backgroundColor: "blue.50",
//       },
//     },
//   },
// };
//
// export const GradientButton: Story = {
//   args: {
//     children: "Gradient Button",
//     css: {
//       background: "linear-gradient(to right, purple.500, pink.500)",
//       color: "white",
//       border: "none",
//       _hover: {
//         background: "linear-gradient(to right, purple.600, pink.600)",
//       },
//     },
//   },
// };
//
// export const WithIcon: Story = {
//   args: {
//     variant: "success",
//     children: "✓ Save Changes",
//     size: "medium",
//   },
// };
//
// export const ClickableButton: Story = {
//   args: {
//     variant: "primary",
//     children: "Click Me!",
//     onClick: () => alert("Button clicked!"),
//   },
// };
