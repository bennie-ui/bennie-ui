/*eslint import/namespace: ['error', { allowComputed: true }]*/
import { FC } from "react";
import * as Icons from "@heroicons/react/24/outline";
import { BasicIconProps } from "../types/icon.types";

const OutlineIcon: FC<BasicIconProps> = ({ className, figure }) => {
  // @ts-expect-error: ignore
  const Icon: JSX.Element = Icons[figure];
  if (Icon) {
    // @ts-expect-error ignore
    return <Icon className={className} />;
  }
  return null;
};

OutlineIcon.displayName = "OutlineIcon";

export { OutlineIcon };
