import { ReactNode, SyntheticEvent } from "react";
import type {
  ScaleType,
  ActionType,
} from "@bennie-ui/types/attributes";

export type ToastProps = {
  action?: ActionType;
  scale?: ScaleType;

  dismissable?: boolean;
  rounded?: boolean;
  duration?: number;
  children: ReactNode;
  onClick?: (event: SyntheticEvent) => void;
  onDismiss?: () => void;
};
