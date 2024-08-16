import { FC } from "react";
import { TextAttributes, TextProperties } from "./text.types.js";
import { TextClassNameBuilder } from "./text.attributes_builder";

const Text: FC<TextProperties> = (properties) => {
  const attributes: TextAttributes = {};

  const TagType = properties.tag || "span";

  if (properties.id !== "") {
    attributes.id = properties.id;
  }

  if (properties.dataTestId !== "") {
    attributes.dataTestId = properties.dataTestId;
  }

  properties.className = TextClassNameBuilder(properties).build();

  //const className = getClassNames();
  //properties.colors?.text && getTextColorAttribute(properties.colors.text),
  //properties.colors?.background &&
  //getBackgroundColorAttribute(properties e.colors.background),
  //properties.opacity,
  //properties.align,
  //properties.display,
  //properties.weight,
  //properties.overflow &&
  //properties.display === "block" &&
  //properties.overflow,
  //properties.className,

  return <TagType {...properties}>{properties.children}</TagType>;
};

Text.displayName = "Text";

export { Text };
