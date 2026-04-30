import { FC } from "react";
import { PageProperties } from "./page.types";
import { pageStyles } from "./page.styles";

export const PageFooter: FC<PageProperties> = ({ dataTestId, children, className, ...rest }) => (
  <div
    data-testid={dataTestId}
    className={`${pageStyles.footer}${className ? ` ${className}` : ""}`}
    {...rest}
  >
    {children}
  </div>
);
