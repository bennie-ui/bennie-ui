import { FC, Children, isValidElement } from "react";
import { getChildrenByDisplayName, useDarkMode } from "@bennie-ui/composition";
import { resolveColor } from "@bennie-ui/types/theme";
import { CardProperties } from "./card.types";
import { cardStyles } from "./card.styles";

export const Card: FC<CardProperties> = ({ dataTestId, title, children, className, styleOverride, style, ...rest }) => {
  const dark = useDarkMode();

  const headerRight = getChildrenByDisplayName(children, "CardHeaderRight");
  const rest_children = Children.toArray(children).filter(
    (child) => !(isValidElement(child) && (child.type as any)?.displayName === "CardHeaderRight")
  );

  const rootStyle = {
    ...(resolveColor(styleOverride?.background, dark) && { backgroundColor: resolveColor(styleOverride?.background, dark) }),
    ...(resolveColor(styleOverride?.borderColor, dark) && { borderColor: resolveColor(styleOverride?.borderColor, dark) }),
    ...style,
  };

  const headerColor = resolveColor(styleOverride?.header?.color, dark);
  const headerStyle = headerColor ? { color: headerColor } : undefined;

  return (
    <div
      data-testid={dataTestId}
      className={`${cardStyles.root}${className ? ` ${className}` : ""}`}
      style={rootStyle}
      {...rest}
    >
      {(title || headerRight.length > 0) && (
        <div className={cardStyles.header} style={headerStyle}>
          {title && <span>{title}</span>}
          {headerRight.length > 0 && <div>{headerRight}</div>}
        </div>
      )}
      {rest_children}
    </div>
  );
};
