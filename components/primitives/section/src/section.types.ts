import React, { ReactNode } from "react";

type SectionTagType = "div" | "pre" | "code" | "section" | "article" | "aside" | "nav" | "main" | "header" | "footer";

export interface SectionProperties extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  dataTestId?: string;
  tag?: SectionTagType;
}
