import React from "react";
import {
  getClassNames,
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getActionColorAttribute,
  getProperties,
} from "@phoenix-ui/attribute-utils";

import type { ButtonAttributes, ButtonProperties } from "./react-button.types";
//import "./react-button.css";

export const Button: React.FC<ButtonProperties> = (
  properties: ButtonProperties
) => {
  const className = getClassNames(
    "button",
    properties.scale ?? "medium",
    properties.rounded,
    properties?.colors?.text != null &&
      getTextColorAttribute(properties.colors.text),
    properties.colors?.background != null &&
      getBackgroundColorAttribute(properties.colors.background),
    getActionColorAttribute(properties.action || "primary"),
    properties.isFullWidth ?? false ? "w-full" : "",
    properties.className
  );

  const attributes: ButtonAttributes = {};

  if (properties.disabled ?? false) {
    attributes.disabled = true;
  }

  console.log("f: className", className);
  return (
    <button {...attributes} {...getProperties({ ...properties, className })}>
      {properties.children}
    </button>
  );
};
