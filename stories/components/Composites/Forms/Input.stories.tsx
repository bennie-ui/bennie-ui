import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@bennie-ui/inputs";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Composites/Forms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    name: {
      control: "text",
      description: "The name attribute for the input",
    },
    label: {
      control: "text",
      description: "Optional label text above the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    withClearMark: {
      control: "boolean",
      description: "Show clear button when input has value",
    },
    full_width: {
      control: "boolean",
      description: "Whether input takes full width of container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: "default-input",
    value: "",
    placeholder: "Enter text here...",
  },
};

export const WithLabel: Story = {
  args: {
    name: "labeled-input",
    label: "Email Address",
    value: "",
    placeholder: "you@example.com",
  },
};

export const WithValue: Story = {
  args: {
    name: "filled-input",
    label: "Username",
    value: "john_doe",
    placeholder: "Enter username",
  },
};

export const WithClearButton: Story = {
  args: {
    name: "clearable-input",
    label: "Search",
    value: "Some text",
    placeholder: "Search...",
    withClearMark: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled-input",
    label: "Disabled Field",
    value: "Cannot edit this",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    name: "password-input",
    label: "Password",
    value: "",
    placeholder: "Enter your password",
  },
  render: (args) => (
    <div>
      <Input {...args} />
      <style>{`input[name="password-input"] { -webkit-text-security: disc; }`}</style>
    </div>
  ),
};

export const CustomStyles: Story = {
  args: {
    name: "custom-input",
    label: "Custom Styled Input",
    value: "",
    placeholder: "Custom styles...",
    css: {
      borderColor: "purple.500",
      _focus: {
        borderColor: "purple.700",
        boxShadow: "0 0 0 1px token(colors.purple.700)",
      },
    },
  },
};
