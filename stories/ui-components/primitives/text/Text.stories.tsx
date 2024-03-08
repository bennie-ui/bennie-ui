import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../../components/primitives/react-text";

const meta: Meta<typeof Text> = {
  title: "UI-Components/Primitives/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    size: "text-xs",
    overrides: {
      medium: { size: "text-xl" },
      large: { size: "text-5xl" },
    },
    children: "I am a text",
  },
};
