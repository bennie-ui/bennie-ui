import { FC, ReactNode } from "react";
import { getChildrenByDisplayName } from "@bennie-ui/composition";
import { CardProperties } from "./card.types";
import { cardStyles } from "./card.styles";

type SlotProps = { children?: ReactNode };

export const CardFooterLeft: FC<SlotProps> = ({ children }) => <>{children}</>;
CardFooterLeft.displayName = "CardFooterLeft";

export const CardFooterRight: FC<SlotProps> = ({ children }) => <>{children}</>;
CardFooterRight.displayName = "CardFooterRight";

export const CardFooter: FC<CardProperties> = ({ dataTestId, children, className, ...rest }) => {
  const left = getChildrenByDisplayName(children, "CardFooterLeft");
  const right = getChildrenByDisplayName(children, "CardFooterRight");

  return (
    <div
      data-testid={dataTestId}
      className={`${cardStyles.footer}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {left}
      {right}
    </div>
  );
};
