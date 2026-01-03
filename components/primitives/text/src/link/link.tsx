import { FC } from "react";
import { css } from 'styled-system/css';
import { LinkAttributes, LinkProperties } from "./link.types";

const Link: FC<LinkProperties> = (properties) => {
  const attributes: LinkAttributes = {
    href: properties.href || "#",
    target: properties.target || "_self",
  };

  if (properties.target === "_blank") {
    attributes.rel = "noreferrer noopener";
  }

  if (properties.id) {
    attributes.id = properties.id;
  }

  if (properties.dataTestId) {
    attributes.dataTestId = properties.dataTestId;
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

  return <a {...attributes}>{properties.children}</a>;
};

Link.displayName = "Link";

export { Link };
