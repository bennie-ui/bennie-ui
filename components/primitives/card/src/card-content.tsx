import { FC } from "react";
import { CardProperties } from "./card.types";
import { cardStyles } from "./card.styles";

export const CardContent: FC<CardProperties> = ({ dataTestId, children, className, ...rest }) => (
  <div
    data-testid={dataTestId}
    className={`${cardStyles.content}${className ? ` ${className}` : ""}`}
    {...rest}
  >
    {children}
  </div>
);
