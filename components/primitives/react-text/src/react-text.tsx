import { FC } from "react";
import { TextProperties } from "./react-text.types.ts";
import {
  getClassNames,
  getTextColorAttribute,
  getBackgroundColorAttribute,
} from "@phoenix-ui/attribute-utils";

const Text: FC<TextProperties> = (properties) => {
  const TagType = properties.tag || "span";

  const classNames = getClassNames(
    properties.size,
    properties.colors?.text && getTextColorAttribute(properties.colors.text),
    properties.colors?.background &&
      getBackgroundColorAttribute(properties.colors.background),
    properties.opacity,
    properties.align,
    properties.display,
    properties.weight,
    properties.overflow &&
      properties.display === "block" &&
      properties.overflow,
    properties.className
  );

  return <span>{properties.children}</span>;
  //return BaseComponent({
  //component: TagType,
  //className: classNames,
  //attributes: {},
  //properties,
  //});
};

Text.displayName = "Text";

export { Text };
