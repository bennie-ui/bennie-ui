import { ComponentProperties } from "@bennie-ui/types";

export const RoundingAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.rounding) {
    return `rounded-${properties.rounding}`;
  }
  return "";
};
