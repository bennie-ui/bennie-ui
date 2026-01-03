import React, { FC } from "react";
import { css } from "styled-system/css";
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

  // Combine custom className with Panda CSS styles
  const className = [
    properties.className,
    properties.css ? css(properties.css) : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  if (className) {
    attributes.className = className;
  }

  return <TagType {...attributes}>{properties.children}</TagType>;
};
