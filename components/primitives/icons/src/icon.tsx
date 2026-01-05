import { FC } from "react";
import { SolidIcon } from "./solid/solid-icon";
import { IconProps } from "./types/icon.types";

const Icon: FC<IconProps> = (props) => {

  return (
    <SolidIcon
      className={props.className}
      figure={props.figure}
      onClick={props.onClick}
    />
  );
};

Icon.displayName = "Icon";

export { Icon };
