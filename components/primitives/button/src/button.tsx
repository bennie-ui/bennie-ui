import React, { FC } from "react";
import {
  getClassNames,
  getComponentProperties,
  getActionColorAttribute,
} from "@phoenix-ui/attribute-utils";
import { ButtonAttributes, ButtonProperties } from "./button.types";
import { getButtonScale, getButtonClassNames } from "./button.utils";

export const Button: FC<ButtonProperties> = (properties) => {
  const className = getClassNames(
    "button",
    getButtonScale(properties),
    getActionColorAttribute(properties),
    properties.isFullWidth ?? false ? "w-full" : "",
    getButtonClassNames(properties),
  );

  const attributes: ButtonAttributes = {};

  if (properties.disabled ?? false) {
    attributes.disabled = true;
  }

  return (
    <button
      {...attributes}
      {...getComponentProperties({ ...properties, className })}
    >
      {properties.children}
    </button>
  );
};
