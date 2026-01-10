import React, { FC } from "react";
import { SectionProperties, SectionAttributes } from "./section.types";
import { DATA_TEST_ID } from "@bennie-ui/constants";

export const Section: FC<SectionProperties> = (properties) => {
  const TagType = properties.tag || "div";
  const attributes: SectionAttributes = {};

  if (properties.id) {
    attributes.id = properties.id;
  }

  if (properties.dataTestId) {
    attributes[DATA_TEST_ID] = properties.dataTestId;
  }

  if (properties.onClick) {
    attributes.onClick = properties.onClick;
  }

  if (properties.style) {
    attributes.style = properties.style;
  }

  if (properties.className) {
    attributes.className = properties.className;
  }

  return <TagType {...attributes}>{properties.children}</TagType>;
};
