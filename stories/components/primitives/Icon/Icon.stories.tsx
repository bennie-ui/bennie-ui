import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@bennie-ui/icons";
import { css } from "styled-system/css";


const meta: Meta<typeof Icon> = {
  title: "Components/Primitives/Icon/Icon",
  component: Icon,
  tags: ["autodocs"],

  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    figure: "BeakerIcon",
    className: css({ height: 10, width: 10, color: 'blue', fontWeight: 200 }),
  },
};
