import React, { FC } from "react";
import { SectionProperties } from "./section.types";

export const Section: FC<SectionProperties> = ({ tag, dataTestId, children, ...rest }) => {
  const TagType = tag || "div";
  return <TagType data-testid={dataTestId} {...rest}>{children}</TagType>;
};
