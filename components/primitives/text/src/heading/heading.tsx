import React, { FC } from "react";
import { getTagSize, getTagWeight } from "./heading.utils";
import { HeadingProps } from "./heading.types";

import {
  getClassNames,
  getComponentProperties,
} from "@phoenix-ui/attribute-utils";

export const Heading: FC<HeadingProps> = (properties) => {
  const TagType = properties?.tag || "h1";
  const className = getClassNames(
    getTagSize(TagType),
    getTagWeight(TagType),
    properties.className || "",
  );

  return (
    <TagType {...getComponentProperties({ ...properties, className })}>
      {properties.children}
    </TagType>
  );
};

Heading.displayName = "Text";
