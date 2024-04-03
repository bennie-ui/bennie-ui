import { FC } from "react";
import { SectionExtendedProperties } from "./section.types";
import {
  getClassNames,
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getProperties,
} from "@phoenix-ui/attribute-utils";
export const Section: FC<SectionExtendedProperties> = ({
  children,
  // align,
  display,
  //weight,
  height,
  tag,
  width,
  margin,
  padding,
  //overflow,
  size,
  colors,
  rounded,
  flex,
  dark,
  overrides,
  dangerouslySetInnerHTML,
  className,
  dataTestId,
}) => {
  const TagType = tag || "div";
  const classNames = getClassNames(
    size,
    colors?.text && getTextColorAttribute(colors.text),
    colors?.background && getBackgroundColorAttribute(colors.background),
    rounded,
    //align,
    display,
    //weight,
    flex && "flex",
    //overflow && display === "block" && overflow,
    className,
  );

  let props = {};

  if (dangerouslySetInnerHTML) {
    props = {
      dangerouslySetInnerHTML,
      ...getProperties({
        width,
        height,
        margin,
        padding,
        flex,
        dark,
        overrides,
        className: classNames,
        dataTestId,
      }),
    };
  } else {
    props = {
      children,
      ...getProperties({
        width,
        height,
        margin,
        padding,
        flex,
        dark,
        overrides,
        className: classNames,
        dataTestId,
      }),
    };
  }

  return <TagType {...props} />;
};
