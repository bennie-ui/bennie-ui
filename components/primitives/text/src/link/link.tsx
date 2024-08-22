import React, { FC } from "react";
import { LinkAttributes, LinkProperties } from "./link.types";
import { getComponentProperties } from "@phoenix-ui/attribute-utils";

const Link: FC<LinkProperties> = (properties) => {
  const attributes: LinkAttributes = {
    href: properties.href || "#",
    target: properties.target || "_self",
  };

  if (properties.target === "_blank") {
    attributes.rel = "noreferrer noopener";
  }

  return (
    <a {...attributes} {...getComponentProperties({ ...properties })}>
      {properties.children}
    </a>
  );
};

Link.displayName = "Link";

export { Link };
