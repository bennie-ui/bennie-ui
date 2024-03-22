import {
  type TextColorType,
  type BackgroundColorType,
  type ActionType,
} from "@phoenix-ui/types/attributes";
import { ActionsMap } from "./attribute.action-map";
import { DATA_TEST_ID } from "@phoenix-ui/constants";
import { type AllWidths, type AllHeights } from "@phoenix-ui/types/sizing";
import { type ClassByResponsiveProps } from "../types";
import {
  ComponentAttributes,
  ComponentProperties,
} from "@phoenix-ui/types/components";

export const getClassNames = (...args) => {
  return args.filter((it) => it ?? "").join(" ");
};

export const getActionColorAttribute = (action: ActionType): string => {
  const defaultAction = ActionsMap[action];
  const textAttribute = getTextColorAttribute(defaultAction.text);
  const backgroundAttribute = getBackgroundColorAttribute(
    defaultAction.background,
  );

  return `${textAttribute} ${backgroundAttribute}`;
};

export const getTextColorAttribute = (
  { color = "text-white", weight = "400" }: TextColorType | undefined = {
    color: "text-white",
    weight: "400",
  },
): string => {
  if (color === "text-white" || color === "text-black") return color;
  return color + "-" + weight;
};

export const getBackgroundColorAttribute = (
  { color = "bg-slate", weight = "400" }: BackgroundColorType | undefined = {
    color: "bg-slate",
    weight: "400",
  },
): string => {
  if (color === "bg-white" || color === "bg-black") return color;
  return color + "-" + weight;
};

export const getResponsiveClassName = (
  parentNames: string[],
  propertyName: string,
  className: string,
): string => {
  // eslint-disable-next-line
  if (parentNames.find?.((it) => it === "medium")) {
    return ` md:${className}`;
  }
  // eslint-disable-next-line
  if (parentNames.find?.((it) => it === "large")) {
    return ` lg:${className}`;
  }
  return ` ${className}`;
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

export const recusiveClassSearch = (
  activeProperty: ClassByResponsiveProps,
  propertyName: string,
  parentNames: string[],
): string => {
  if (activeProperty === undefined) {
    return "";
  }

  if (typeof activeProperty === "string") {
    return getResponsiveClassName(parentNames, propertyName, activeProperty);
  }

  if (
    (activeProperty as TextColorType | BackgroundColorType).color !== undefined
  ) {
    const isTextColor = propertyName === "text";
    const isBackgroundColor = propertyName === "background";

    if (isTextColor) {
      const colorClass = getTextColorAttribute(activeProperty as TextColorType);
      const darkColorClass = getDarkClassName(
        parentNames,
        propertyName,
        colorClass,
      );
      return getResponsiveClassName(parentNames, propertyName, darkColorClass);
    }

    if (isBackgroundColor) {
      const colorClass = getBackgroundColorAttribute(
        activeProperty as BackgroundColorType,
      );
      const darkColorClass = getDarkClassName(
        parentNames,
        propertyName,
        colorClass,
      );
      return getResponsiveClassName(parentNames, propertyName, darkColorClass);
    }
  }

  if (propertyName === "width") {
    return getResponsiveClassName(
      parentNames,
      propertyName,
      `w-${(activeProperty as AllWidths).value}`,
    );
  }

  if (propertyName === "height") {
    return getResponsiveClassName(
      parentNames,
      propertyName,
      `h-${(activeProperty as AllHeights).value}`,
    );
  }

  //if ((activeProperty as FlexType).basis !== undefined) {
  //const basisClass = `basis-${(activeProperty as FlexType).basis}`;
  //return getResponsiveClassName(parentNames, propertyName, basisClass);
  //}

  let classes = "";
  Object.entries(activeProperty).forEach(([childPropertyName]) => {
    classes += recusiveClassSearch(
      // @ts-ignore
      activeProperty[childPropertyName] as ClassByResponsiveProps,
      childPropertyName,
      [propertyName, ...parentNames],
    );
  });

  return classes;
};

export const getClassByViewPort = (
  properties: ClassByResponsiveProps,
): string => {
  let classes = "";

  Object.entries(properties).forEach(([propertyName, property]) => {
    if (property !== undefined) {
      classes += recusiveClassSearch(
        property as ClassByResponsiveProps,
        propertyName,
        [""],
      );
    }
  });

  return classes;
};

export const getProperties = (properties: ComponentProperties) => {
  const {
    id,
    size,
    width,
    height,
    margin,
    padding,
    //flex,
    dark,
    opacity,
    overrides,
    dataTestId,
    onClick,
  } = properties;
  const attributes: ComponentAttributes = {};

  const className =
    properties.className +
    getClassByViewPort({
      size,
      width,
      height,
      margin,
      padding,
      //flex,
      dark,
      opacity,
      overrides,
    });

  if (onClick) {
    attributes.onClick = onClick;
  }

  if (id !== "") {
    attributes.id = id;
  }

  if (className !== "") {
    attributes.className = className.trim();
  }

  if (dataTestId !== "") {
    attributes[DATA_TEST_ID] = dataTestId;
  }

  return attributes;
};
