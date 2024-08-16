import { ComponentProperties } from "packages/phoenix-ui/libraries/types";
import { ButtonProperties } from "./button.types";

export const getButtonScale = ({
  scale,
  padding,
  className,
}: ButtonProperties): string => {
  const classes = className?.split(" ") || null;
  const padding_class = classes?.find((it) => it.includes("p"));

  if (padding_class) {
    return "";
  }

  if (padding) {
    return `p-${padding}`;
  }

  switch (scale) {
    case "medium":
      return "px-4 py-2";

    case "large":
      return "px-16 py-3";

    default:
      return "p-2";
  }
};

export const getButtonClassNames = (
  properties: ComponentProperties,
): string => {
  if (properties.action) {
    const classes = properties.className?.split(" ") || [];

    const filtered_classes = classes
      .filter((it: string) => !(it.includes("text-") || it.includes("bg-")))
      .join(" ");

    return filtered_classes;
  }

  return properties.className || "";
};
