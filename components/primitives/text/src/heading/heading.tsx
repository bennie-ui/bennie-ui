import React, { FC } from "react";
import { getTagSize, getTagWeight } from "./heading.utils";
import { HeadingProps } from "./heading.types";

import {
  getClassNames,
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getComponentProperties,
} from "@phoenix-ui/attribute-utils";

export const Heading: FC<HeadingProps> = (properties) => {
  const TagType = properties?.tag || "h1";
  const TagSize = getTagSize(TagType);
  const TagWeight = getTagWeight(TagType);

  const className = getClassNames(
    TagSize,
    TagWeight,
    properties?.colors?.text && getTextColorAttribute(properties.colors.text),
    properties.colors?.background &&
      getBackgroundColorAttribute(properties.colors.background),
    properties.align,
    properties.className,
  );

  return (
    <TagType {...getComponentProperties({ ...properties, className })}>
      {properties.children}
    </TagType>
  );
};

Heading.displayName = "Text";
