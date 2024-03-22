import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../../../../components/primitives/text";

const meta: Meta<typeof Text> = {
  title: "UI-Components/Primitives/Texts/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    children: "I am a Heading",
  },
};
