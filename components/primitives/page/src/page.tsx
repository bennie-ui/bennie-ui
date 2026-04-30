import { FC, Children, isValidElement } from "react";
import { getChildrenByDisplayName, useDarkMode } from "@bennie-ui/composition";
import { resolveColor } from "@bennie-ui/types/theme";
import { PageProperties } from "./page.types";
import { pageStyles } from "./page.styles";

export const Page: FC<PageProperties> = ({ dataTestId, title, subtitle, children, className, styleOverride, style, ...rest }) => {
  const dark = useDarkMode();

  const actions = getChildrenByDisplayName(children, "PageActions");
  const rest_children = Children.toArray(children).filter(
    (child) => !(isValidElement(child) && (child.type as any)?.displayName === "PageActions")
  );

  const bgColor = resolveColor(styleOverride?.background, dark);
  const titleColor = resolveColor(styleOverride?.title?.color, dark);
  const subtitleColor = resolveColor(styleOverride?.subtitle?.color, dark);

  return (
    <div
      data-testid={dataTestId}
      className={`${pageStyles.root}${className ? ` ${className}` : ""}`}
      style={{ ...(bgColor && { backgroundColor: bgColor }), ...style }}
      {...rest}
    >
      <div className={pageStyles.header}>
        <div className={pageStyles.titleGroup}>
          {title && (
            <h1 className={pageStyles.title} style={titleColor ? { color: titleColor } : undefined}>
              {title}
            </h1>
          )}
          {subtitle && (
            <span className={pageStyles.subtitle} style={subtitleColor ? { color: subtitleColor } : undefined}>
              {subtitle}
            </span>
          )}
        </div>
        {actions.length > 0 && <div>{actions}</div>}
      </div>
      {rest_children}
    </div>
  );
};
