import { FC } from "react";
import { css, cx } from "styled-system/css";
import { ButtonProperties } from "./button.types";
import { buttonBase, buttonVariants, buttonSizes, buttonRounded } from "./button.styles";

export const Button: FC<ButtonProperties> = ({
  children,
  dataTestId,
  disabled,
  variant,
  size,
  rounded,
  fullWidth,
  className,
  ...rest
}) => {
  const variantClass = buttonVariants[variant || "neutral"];
  const sizeClass = buttonSizes[size || "small"];

  let roundedClass: string | undefined;
  if (rounded === true) {
    roundedClass = buttonRounded["md"];
  } else if (typeof rounded === "string") {
    roundedClass = buttonRounded[rounded];
  }

  const combinedClassName = cx(
    buttonBase,
    variantClass,
    sizeClass,
    roundedClass,
    fullWidth && css({ width: "full" }),
    disabled && css({ opacity: 0.5, cursor: "not-allowed" }),
    className,
  );

  return (
    <button data-testid={dataTestId} disabled={disabled} className={combinedClassName} {...rest}>
      {children}
    </button>
  );
};
