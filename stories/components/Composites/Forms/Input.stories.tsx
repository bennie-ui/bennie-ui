import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@bennie-ui/inputs";

const meta: Meta<typeof TextInput> = {
  title: "Components/Composites/Forms/Input",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    colors: { text: { color: "gray" } },
  },
};
