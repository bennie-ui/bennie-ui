/*eslint import/namespace: ['error', { allowComputed: true }]*/
import { FC } from "react";
import * as Icons from "@heroicons/react/24/solid";
import { BasicIconProps } from "../types/icon.types";

const SolidIcon: FC<BasicIconProps> = ({ className, figure }) => {
  // @ts-expect-error: ignore
  const Icon: JSX.Element = Icons[figure];
  if (Icon) {
    // @ts-expect-error ignore
    return <Icon className={className} />;
  }
  return null;
};

SolidIcon.displayName = "OutlineIcon";

export { SolidIcon };
