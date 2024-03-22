import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../../../../components/primitives/text";

const meta: Meta<typeof Text> = {
  title: "UI-Components/Primitives/Texts/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "I am a link",
    onClick: () => {
      alert("i have an event attached");
    },
  },
};
