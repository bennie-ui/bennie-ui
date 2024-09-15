import { ComponentProperties } from "@bennie-ui/types";

export const RoundingAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.rounding) {
    switch (properties.rounding) {
      case "md":
        return " rounded-md";

      case "lg":
        return " rounded-lg";

      case "full":
        return " rounded-full";

      default:
        return " rounded-none";
    }
  }
  return "";
};
