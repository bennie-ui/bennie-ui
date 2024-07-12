import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../../../components/primitives/button";

const meta: Meta<typeof Button> = {
  title: "Components/Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    action: "primary",
    children: "",
  },
};
