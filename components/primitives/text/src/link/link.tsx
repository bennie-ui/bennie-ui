import { FC } from "react";
import { NavLink } from "@remix-run/react";
import {
  LinkAttributes,
  RemixNavLinkAttributes,
  LinkProperties,
} from "./link.types";
import {
  getClassNames,
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getProperties,
} from "@phoenix-ui/attribute-utils";

const Link: FC<LinkProperties> = (properties) => {
  const className = getClassNames(
    properties.size,
    properties?.colors?.text
      ? getTextColorAttribute(properties.colors.text)
      : "text-blue-400",
    properties.colors?.background &&
      getBackgroundColorAttribute(properties.colors.background),
    properties.opacity,
    properties.align,
    properties.display,
    properties.weight,
    properties.className
  );

  const attributes: LinkAttributes | RemixNavLinkAttributes =
    properties.flavor === "react"
      ? {
          href: properties.href || "#",
          target: properties.target || "_self",
        }
      : {
          to: properties.href,
        };

  if (properties.target === "_blank") {
    attributes.rel = "noreferrer noopener";
  }

  if (properties.flavor === "remix") {
    <NavLink {...attributes} {...getProperties({ ...properties, className })}>
      {properties.children}
    </NavLink>;
  }

  return (
    <a {...attributes} {...getProperties({ ...properties, className })}>
      {properties.children}
    </a>
  );
};

Link.displayName = "Link";

export { Link };
