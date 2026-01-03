import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@bennie-ui/toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Composites/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    action: {
      control: "select",
      options: ["neutral", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"],
      description: "The color variant of the toast",
    },
    scale: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the toast",
    },
    dismissable: {
      control: "boolean",
      description: "Whether the toast can be dismissed",
    },
    rounded: {
      control: "boolean",
      description: "Whether the toast has rounded corners",
    },
    duration: {
      control: "number",
      description: "Auto-dismiss duration in seconds (only works if dismissable is true)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  args: {
    children: "This is a primary toast notification",
    action: "primary",
    scale: "medium",
    dismissable: true,
    rounded: true,
  },
};

export const Success: Story = {
  args: {
    children: "Operation completed successfully!",
    action: "success",
    scale: "medium",
    dismissable: true,
    rounded: true,
  },
};

export const Danger: Story = {
  args: {
    children: "An error occurred!",
    action: "danger",
    scale: "medium",
    dismissable: true,
    rounded: true,
  },
};

export const Warning: Story = {
  args: {
    children: "Warning: Please review your settings",
    action: "warning",
    scale: "medium",
    dismissable: true,
    rounded: true,
  },
};

export const Info: Story = {
  args: {
    children: "Here's some helpful information",
    action: "info",
    scale: "medium",
    dismissable: true,
    rounded: true,
  },
};

export const Light: Story = {
  args: {
    children: "Light themed toast",
    action: "light",
    scale: "medium",
    dismissable: true,
    rounded: true,
  },
};

export const Dark: Story = {
  args: {
    children: "Dark themed toast",
    action: "dark",
    scale: "medium",
    dismissable: true,
    rounded: true,
  },
};

export const Small: Story = {
  args: {
    children: "Small toast",
    action: "primary",
    scale: "small",
    dismissable: true,
    rounded: true,
  },
};

export const Large: Story = {
  args: {
    children: "Large toast notification",
    action: "primary",
    scale: "large",
    dismissable: true,
    rounded: true,
  },
};

export const NotDismissable: Story = {
  args: {
    children: "This toast cannot be dismissed",
    action: "info",
    scale: "medium",
    dismissable: false,
    rounded: true,
  },
};

export const AutoDismiss: Story = {
  args: {
    children: "This toast will auto-dismiss in 3 seconds",
    action: "success",
    scale: "medium",
    dismissable: true,
    rounded: true,
    duration: 3,
  },
};

export const NotRounded: Story = {
  args: {
    children: "Toast without rounded corners",
    action: "primary",
    scale: "medium",
    dismissable: true,
    rounded: false,
  },
};
