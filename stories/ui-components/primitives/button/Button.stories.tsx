import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../../components/primitives/react-button";

const meta: Meta<typeof Button> = {
  title: "UI-Components/Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    width: { value: "60" },
    children: "I am a button",
  },
};
