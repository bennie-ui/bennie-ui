import { FC, ReactNode } from "react";

type PageActionsProps = { children?: ReactNode };

export const PageActions: FC<PageActionsProps> = ({ children }) => <>{children}</>;
PageActions.displayName = "PageActions";
