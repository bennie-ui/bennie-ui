import { ActionType, ColorPropertiesType } from "@phoenix-ui/types/attributes";
import { ActionsMap } from "./attribute.action-map";
import { ComponentProperties } from "@phoenix-ui/types";

export const getActionColorAttribute = (
  properties: ComponentProperties,
): string => {
  const { action, className } = properties;

  if (action === undefined) {
    return "";
  }

  const defaultAction = ActionsMap[action];
  const textAttribute = getTextColorAttribute(
    defaultAction?.text as ColorPropertiesType,
  );
  const backgroundAttribute = getBackgroundColorAttribute(
    defaultAction?.background as ColorPropertiesType,
  );

  return `${textAttribute} ${backgroundAttribute} `;
};

export const getTextColorAttribute = (value: ColorPropertiesType): string => {
  const { color = "white", weight = "500" } = value;
  if (color === "white" || color === "black") return `text-${color}`;
  return `text-${color}-${weight}`;
};

export const getBackgroundColorAttribute = (
  value: ColorPropertiesType,
): string => {
  const { color = "slate", weight = "500" } = value;
  if (color === "white" || color === "black") return `bg-${color}`;
  return `bg-${color}-${weight}`;
};

export const getDarkClassName = (
  parentNames: string[],
  propertyName: string,
  className: string,
): string => {
  if (parentNames.includes("dark") || propertyName === "dark") {
    return `dark:${className}`;
  }
  return `${className}`;
};
