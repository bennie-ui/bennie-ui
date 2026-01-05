import { FC } from "react";
import { css } from 'styled-system/css';
import { getTagStyles } from "./heading.utils";
import { HeadingProperties } from "./heading.types";

export const Heading: FC<HeadingProperties> = (properties) => {
  const TagType = properties?.tag || "h1";
  
  // Get default styles for the heading tag
  const tagStyles = getTagStyles(TagType);
  
  // Merge tag styles with custom css prop
  const mergedStyles = properties.css 
    ? { ...tagStyles, ...properties.css }
    : tagStyles;
  
  const attributes: Record<string, any> = {};

  if (properties.id) {
    attributes.id = properties.id;
  }

  if (properties.dataTestId) {
    attributes.dataTestId = properties.dataTestId;
  }

  if (properties.onClick) {
    attributes.onClick = properties.onClick;
  }

  // Combine custom className with Panda CSS styles
  const className = [
    properties.className,
    css(mergedStyles),
  ]
    .filter(Boolean)
    .join(" ");

  if (className) {
    attributes.className = className;
  }

  // @ts-expect-error - HeadingTagType includes h7 which is not a standard HTML element
  return <TagType {...attributes}>{properties.children}</TagType>;
};

Heading.displayName = "Heading";
