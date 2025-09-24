import { ComponentProperties } from "@bennie-ui/types";

export const PositionAttributeBuilder = (
  properties: ComponentProperties,
): string => {

  let classes = "";

  if (properties.position) {
    classes += ` ${properties.position.style || "relative"}`;

    if (properties.position.index) {
      classes += ` z-${properties.position.index || '0'}`
    }


    const positive_entries = Object.entries(properties.position?.positive || {});
    const negative_entries = Object.entries(properties.position?.inverse || {});

    const get_position_value = (property_name: string, property_value: string, prefix: string) => {
      const is_auto = property_name.includes("x") || property_name.includes("y");

      if (property_name.includes("all")) {
        classes += ` inset-${property_value}`;
      } else {
        classes += is_auto
          ? ` ${prefix}inset-${property_name}-${property_value}`
          : ` ${prefix}${property_name}-${property_value}`;
      }
    }

    positive_entries.forEach(([property_name, property_value]) => get_position_value(property_name, property_value, ''));
    negative_entries.forEach(([property_name, property_value]) => get_position_value(property_name, property_value, '-'));
  }
  return classes;
};
