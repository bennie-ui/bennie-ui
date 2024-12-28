import React from "react";
import { Section } from "@bennie-ui/section";

export const LineChart = ({ options }) => {
  const { data, axis } = options;
  console.log("f: data", { data, axis });
  return (
    <Section
      height={{ value: "max" }}
      width={{ value: "full" }}
      flex={{ grow: "1" }}
      colors={{ background: { color: "red" } }}
    ></Section>
  );
};
