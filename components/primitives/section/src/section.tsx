import React, { FC } from "react";
import { SectionExtendedProperties } from "./section.types";
import {
  getClassNames,
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getProperties,
} from "@phoenix-ui/attribute-utils";
export const Section: FC<SectionExtendedProperties> = ({
  children,
  align,
  colors,
  className,
  dataTestId,
  dark,
  display,
  flex,
  //weight,
  height,
  margin,
  opacity,
  overrides,
  padding,
  rounding,
  size,
  tag,
  width,
  //overflow,
  dangerouslySetInnerHTML,
}) => {
  const TagType = tag || "div";
  const classNames = getClassNames(
    align,
    colors?.text && getTextColorAttribute(colors.text),
    colors?.background && getBackgroundColorAttribute(colors.background),
    display,
    //weight,
    flex && "flex",
    size,
    //overflow && display === "block" && overflow,
    className,
  );

  let props = {};

  if (dangerouslySetInnerHTML) {
    props = {
      dangerouslySetInnerHTML,
      ...getProperties({
        className: classNames,
        dark,
        dataTestId,
        flex,
        height,
        margin,
        opacity,
        overrides,
        padding,
        rounding,
        width,
      }),
    };
  } else {
    props = {
      children,
      ...getProperties({
        align,
        dark,
        className: classNames,
        dataTestId,
        flex,
        height,
        margin,
        opacity,
        overrides,
        padding,
        rounding,
        width,
      }),
    };
  }

  return <TagType {...props} />;
};
