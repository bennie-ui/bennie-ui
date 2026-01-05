import { ChangeEvent, ReactNode, SyntheticEvent } from "react";
import { DATA_TEST_ID } from "@bennie-ui/constants";
import { SystemStyleObject } from 'styled-system/types';

export interface InputAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  onClick?: (event: SyntheticEvent) => void;
  disabled?: boolean;
}

export type InputProperties = {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  children?: ReactNode;
  className?: string;
  css?: SystemStyleObject;
  dataTestId?: string;
  disabled?: boolean;

  full_width?: boolean;
  withClearMark?: boolean;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type InputOption = {
  name: string;
  label?: string;
  value: string;
  selected: boolean;
};
