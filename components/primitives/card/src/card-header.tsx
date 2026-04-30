import { FC, ReactNode } from "react";

type SlotProps = { children?: ReactNode };

export const CardHeaderRight: FC<SlotProps> = ({ children }) => <>{children}</>;
CardHeaderRight.displayName = "CardHeaderRight";
