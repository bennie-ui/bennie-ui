import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  type ButtonProperties,
} from "../../../../components/primitives/react-button";

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

export const Primary: { args: ButtonProperties } = {
  args: {
    action: "primary",

    className: "hover:bg-neutral-200",
    onClick: () => {
      alert("click");
    },
    children: "I am a button updated",
  },
};
