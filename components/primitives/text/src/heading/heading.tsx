import { FC } from "react";
import { getTagSize, getTagWeight } from "./heading.utils";
import { HeadingProps } from "./heading.types";

import { getComponentProperties } from "@phoenix-ui/attribute-utils";

export const Heading: FC<HeadingProps> = (properties) => {
  const TagType = properties?.tag || "h1";
  const TagSize = getTagSize(TagType);
  const TagWeight = getTagWeight(TagType);

  return (
    <TagType {...getComponentProperties({ ...properties })}>
      {properties.children}
    </TagType>
  );
};

Heading.displayName = "Text";
