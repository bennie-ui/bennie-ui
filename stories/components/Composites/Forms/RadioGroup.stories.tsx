import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "@bennie-ui/inputs";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Composites/Forms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    display: {
      control: "select",
      options: ["row", "col"],
      description: "Layout direction for radio buttons",
    },
    disabled: {
      control: "boolean",
      description: "Whether all radio buttons are disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const ColumnLayout: Story = {
  args: {
    display: "col",
    options: [
      { name: "option", label: "Option 1", value: "option1", selected: false },
      { name: "option", label: "Option 2", value: "option2", selected: true },
      { name: "option", label: "Option 3", value: "option3", selected: false },
    ],
    onChange: (event) => {
      console.log("Selected:", event.target.value);
    },
  },
};

export const RowLayout: Story = {
  args: {
    display: "row",
    options: [
      { name: "plan", label: "Basic", value: "basic", selected: false },
      { name: "plan", label: "Pro", value: "pro", selected: true },
      { name: "plan", label: "Enterprise", value: "enterprise", selected: false },
    ],
    onChange: (event) => {
      console.log("Selected plan:", event.target.value);
    },
  },
};

export const Disabled: Story = {
  args: {
    display: "col",
    disabled: true,
    options: [
      { name: "disabled-option", label: "Option 1", value: "option1", selected: false },
      { name: "disabled-option", label: "Option 2", value: "option2", selected: true },
      { name: "disabled-option", label: "Option 3", value: "option3", selected: false },
    ],
    onChange: (event) => {
      console.log("Selected:", event.target.value);
    },
  },
};

export const ManyOptions: Story = {
  args: {
    display: "col",
    options: [
      { name: "size", label: "Extra Small", value: "xs", selected: false },
      { name: "size", label: "Small", value: "sm", selected: false },
      { name: "size", label: "Medium", value: "md", selected: true },
      { name: "size", label: "Large", value: "lg", selected: false },
      { name: "size", label: "Extra Large", value: "xl", selected: false },
      { name: "size", label: "2X Large", value: "2xl", selected: false },
    ],
    onChange: (event) => {
      console.log("Selected size:", event.target.value);
    },
  },
};

export const CustomStyles: Story = {
  args: {
    display: "row",
    options: [
      { name: "theme", label: "Light", value: "light", selected: false },
      { name: "theme", label: "Dark", value: "dark", selected: true },
      { name: "theme", label: "Auto", value: "auto", selected: false },
    ],
    css: {
      padding: "4",
      backgroundColor: "gray.100",
      borderRadius: "lg",
    },
    onChange: (event) => {
      console.log("Selected theme:", event.target.value);
    },
  },
};
