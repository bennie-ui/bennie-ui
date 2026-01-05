import { SyntheticEvent } from "react";
import { SystemStyleObject } from "styled-system/types";
import { TextTagType } from "@bennie-ui/types/texts";
import { DATA_TEST_ID } from "@bennie-ui/constants";

export type TextAttributes = {
  id?: string;
  [DATA_TEST_ID]?: string;
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
};

export type TextProperties = {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  dataTestId?: string;
  tag?: TextTagType;
  onClick?: (event: SyntheticEvent) => void;
  css?: SystemStyleObject;
};
