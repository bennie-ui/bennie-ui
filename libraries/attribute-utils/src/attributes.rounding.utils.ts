import { ComponentProperties } from "@phoenix-ui/types";

export const getRoundingAttribute = (
  properties: ComponentProperties,
): string => {
  if (properties.rounding) {
    switch (properties.rounding) {
      case "md":
        return "rounding-md";

      case "lg":
        return "rounding-lg";

      case "full":
        return "rounding-full";

      default:
        return "rounding-none";
    }
  }
  return "";
};
