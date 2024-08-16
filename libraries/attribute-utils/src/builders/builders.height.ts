import { ComponentProperties } from "@phoenix-ui/types";

export const HeightAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.height) {
    return `h-${properties.height.value}`;
  }
  return "";
};
