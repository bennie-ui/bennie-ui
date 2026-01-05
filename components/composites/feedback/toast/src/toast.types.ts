import { ReactNode, SyntheticEvent } from "react";
import type {
  ScaleType,
  ActionType,
} from "@bennie-ui/types/attributes";
import { SystemStyleObject } from 'styled-system/types';

export type ToastProps = {
  action?: ActionType;
  scale?: ScaleType;

  dismissable?: boolean;
  rounded?: boolean;
  duration?: number;
  children: ReactNode;
  className?: string;
  css?: SystemStyleObject;
  onClick?: (event: SyntheticEvent) => void;
  onDismiss?: () => void;
};
