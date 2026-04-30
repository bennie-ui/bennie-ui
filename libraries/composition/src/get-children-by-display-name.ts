import { ReactNode, Children, isValidElement } from "react";

export const getChildrenByDisplayName = (children: ReactNode, displayName: string) =>
  Children.toArray(children).filter(
    (child) => isValidElement(child) && (child.type as any)?.displayName === displayName
  );
