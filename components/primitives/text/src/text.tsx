import { FC } from "react";
import { css } from "styled-system/css";
import { TextProperties } from "./text.types";

const Text: FC<TextProperties> = ({ tag, dataTestId, children, css: cssStyles, className, ...rest }) => {
  const TagType = tag || "span";
  const combinedClassName = [className, cssStyles ? css(cssStyles) : undefined].filter(Boolean).join(" ") || undefined;
  return <TagType data-testid={dataTestId} className={combinedClassName} {...rest}>{children}</TagType>;
};

Text.displayName = "Text";

export { Text };
