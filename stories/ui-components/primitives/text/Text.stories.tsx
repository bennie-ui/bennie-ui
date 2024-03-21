import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../../components/primitives/text";

const meta: Meta<typeof Text> = {
  title: "UI-Components/Primitives/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: "I am a text",
  },
};
