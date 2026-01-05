import { IconFigure } from "./icon-figure.type";

export type IconProperties = {
  className?: string;
  figure: IconFigure;
  onClick?: () => void;
};

export type IconProps = IconProperties;
