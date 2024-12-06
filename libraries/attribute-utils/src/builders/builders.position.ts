import { ComponentProperties } from "@bennie-ui/types";

export const PositionAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  let classes = "";

  if (properties.position) {
    const entries = Object.entries(properties.position);

    entries.forEach(([property_name, property_value]) => {
      const is_auto =
        property_name.includes("x") || property_name.includes("y");

      if (property_name.includes("all")) {
        classes += `inset-${property_value}`;
      } else {
        classes += is_auto
          ? `inset-${property_name}-${property_value}`
          : `${property_name}-${property_value}`;
      }

      return classes;
    });
  }
  return classes;
};
