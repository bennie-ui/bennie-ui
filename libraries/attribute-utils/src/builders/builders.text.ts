import { ComponentProperties } from "@phoenix-ui/types";

export const TextAlignAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.align) {
    return `text-${properties.align}`;
  }
  return "";
};

export const TextSizeAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.size) {
    return `text-${properties.size}`;
  }
  return "";
};
