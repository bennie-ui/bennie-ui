import React from "react";
import { SystemStyleObject } from "styled-system/types";
import { TextTagType } from "@bennie-ui/types/texts";

export type TextProperties = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  dataTestId?: string;
  tag?: TextTagType;
  css?: SystemStyleObject;
};
