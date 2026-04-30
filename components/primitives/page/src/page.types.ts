import React from "react";
import type { ColorOverride } from "@bennie-ui/types/theme";

export type PageStyleOverride = {
  background?: ColorOverride;
  title?: {
    color?: ColorOverride;
  };
  subtitle?: {
    color?: ColorOverride;
  };
};

export interface PageProperties extends React.ComponentPropsWithoutRef<"div"> {
  dataTestId?: string;
  title?: string;
  subtitle?: string;
  styleOverride?: PageStyleOverride;
}
