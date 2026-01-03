import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@bennie-ui/text";
import { css } from "styled-system/css";

const meta: Meta<typeof Text> = {
  title: "Components/Primitives/Text/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

// Using className with static css() call so Panda can extract it
const redTextClass = css({ color: 'red' });

export const Primary: Story = {
  args: {
    children: "I am a text",
    className: redTextClass,
  },
};
