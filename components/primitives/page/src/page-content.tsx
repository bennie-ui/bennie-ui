import { FC } from "react";
import { PageProperties } from "./page.types";
import { pageStyles } from "./page.styles";

export const PageContent: FC<PageProperties> = ({ dataTestId, children, className, ...rest }) => (
  <div
    data-testid={dataTestId}
    className={`${pageStyles.content}${className ? ` ${className}` : ""}`}
    {...rest}
  >
    {children}
  </div>
);
