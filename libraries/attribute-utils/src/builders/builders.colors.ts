import {
  getTextColorAttribute,
  getBackgroundColorAttribute,
} from "../attributes.color.utils";
import { ComponentProperties, BuilderFunction } from "@phoenix-ui/types";

export const ColorBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  //console.log("f: properties", properties);
  if (properties.colors?.text) {
    classes += TextColorBuilder(properties);
  }

  if (properties.colors?.background) {
    classes += " " + BackgroundColorBuilder(properties);
  }

  return classes;
};
export const TextColorBuilder: BuilderFunction = (
  properties: ComponentProperties,
): string => {
  const className = "";

  if (properties.action != null) {
    return "";
  }

  if (
    properties.className?.indexOf &&
    properties.className?.indexOf("text-") > -1
  ) {
    return "";
  }

  if (properties.colors?.text) {
    return getTextColorAttribute(properties.colors?.text);
  }

  return " ";
};

export const BackgroundColorBuilder: BuilderFunction = (
  properties: ComponentProperties,
): string => {
  if (properties.action != null) {
    return "";
  }

  if (
    properties.className?.indexOf &&
    properties.className?.indexOf("bg-") > -1
  ) {
    return "";
  }

  if (properties.colors?.background) {
    return getBackgroundColorAttribute(properties.colors?.background);
  }

  return " ";
};
