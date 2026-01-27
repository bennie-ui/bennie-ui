import { FC } from "react";
import { css, cx } from "styled-system/css";
import { ButtonAttributes, ButtonProperties } from "./button.types";
import { buttonBase, buttonVariants, buttonSizes, buttonRounded } from "./button.styles";
import { DATA_TEST_ID } from "@bennie-ui/constants";

export const Button: FC<ButtonProperties> = (properties) => {
  const attributes: ButtonAttributes = {};

  if (properties.disabled) {
    attributes.disabled = true;
  }

  if (properties.id) {
    attributes.id = properties.id;
  }

  if (properties.dataTestId) {
    attributes[DATA_TEST_ID] = properties.dataTestId;
  }

  if (properties.onClick) {
    attributes.onClick = properties.onClick;
  }

  const variantClass = buttonVariants[properties.variant || "neutral"];
  const sizeClass = buttonSizes[properties.size || "small"];

  let roundedClass: string;
  if (properties.rounded === true) {
    roundedClass = buttonRounded["md"];
  } else if (typeof properties.rounded === "string") {
    roundedClass = buttonRounded[properties.rounded];
  }

  const className = cx(
    buttonBase,
    variantClass,
    sizeClass,
    roundedClass,
    properties.fullWidth && css({ width: "full" }),
    properties.disabled && css({ opacity: 0.5, cursor: "not-allowed" }),
    properties.className
  );

  if (className) {
    attributes.className = className;
  }

  return <button {...attributes}>{properties.children}</button>;
};
