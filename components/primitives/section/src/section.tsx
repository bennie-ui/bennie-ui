import { FC } from "react";
import {
  getClassNames,
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getSectionProperties,
} from "@phoenix-ui/attribute-utils";
import { SectionProperties } from "./section.types";
export const Section: FC<SectionProperties> = ({
  children,
  align,
  colors,
  className,
  dataTestId,
  dark,
  //display,
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
    colors?.text && getTextColorAttribute(colors.text),
    colors?.background && getBackgroundColorAttribute(colors.background),
    //display,
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
      ...getSectionProperties({
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
      ...getSectionProperties({
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
