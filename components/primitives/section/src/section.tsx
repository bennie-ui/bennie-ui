import React, { FC } from "react";
import { getComponentProperties } from "@phoenix-ui/attribute-utils";
import { SectionProperties } from "./section.types";

export const Section: FC<SectionProperties> = (properties) => {
  const TagType = properties.tag || "div";
  return (
    <TagType {...getComponentProperties(properties)}>
      {properties.children}
    </TagType>
  );
};
