import { ComponentProperties } from "@bennie-ui/types";

export const CursorAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.cursor) {
    return `cursor-${properties.cursor}`;
  }
  return "";
};
