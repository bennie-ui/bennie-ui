import { ComponentProperties } from "@phoenix-ui/types";
import { getPrefix } from "./builders.utils";

export const WidthAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.width) {
    return `w-${properties.width.value}`;
  }
  return "";
};
