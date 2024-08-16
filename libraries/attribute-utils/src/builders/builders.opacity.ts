import { ComponentProperties } from "@phoenix-ui/types";

export const OpacityAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.opacity) {
    return `opacity-${properties.opacity}`;
  }
  return "";
};
