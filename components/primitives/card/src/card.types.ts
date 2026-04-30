import React from "react";
import type { ColorOverride } from "@bennie-ui/types/theme";

export type { ColorOverride };

export type CardStyleOverride = {
  background?: ColorOverride;
  borderColor?: ColorOverride;
  header?: {
    color?: ColorOverride;
  };
};

export interface CardProperties extends React.ComponentPropsWithoutRef<"div"> {
  dataTestId?: string;
  title?: string;
  styleOverride?: CardStyleOverride;
}
