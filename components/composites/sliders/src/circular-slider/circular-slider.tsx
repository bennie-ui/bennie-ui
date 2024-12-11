import React, { FC, useState, useEffect } from "react";
import { Text } from "@bennie-ui/text";
import { Section } from "@bennie-ui/section";
import { ComponentProperties } from "@bennie-ui/types";

type CircularSlideProps = {};

type CircularSliderStyles = {
  wrapper: ComponentProperties;
  handler: ComponentProperties;

  outer: ComponentProperties;
  inner: ComponentProperties;
};

const styles: CircularSliderStyles = {
  wrapper: {
    position: { style: "relative" },
    width: { value: "96" },
    height: { value: "96" },
  },
  handler: {
    border: { style: "solid", width: { all: "1" } },
    position: { style: "absolute" },
    rounding: { all: "full" },
    colors: {
      background: { color: "red", weight: "800" },
      border: { color: "red", weight: "900" },
    },
    width: { value: "12" },
    height: { value: "12" },
  },
  outer: {
    border: { style: "solid", width: { all: "1" } },
    rounding: { all: "full" },
    flex: { justifyContent: "center", alignItems: "center" },
    colors: {
      background: { color: "purple", weight: "800" },
      border: { color: "purple", weight: "900" },
    },
    width: { value: "96" },
    height: { value: "96" },
  },
  inner: {
    rounding: { all: "full" },
    colors: {
      text: { color: "white" },
      background: { color: "gray", weight: "700" },
    },
    size: "8xl",
    flex: { justifyContent: "center", alignItems: "center" },
    width: { value: "5/6" },
    height: { value: "5/6" },
  },
};

type Position = {
  top: number;
  left: number;
};
export const CircularSlider: FC<CircularSlideProps> = () => {
  const [tick, setTick] = useState(0);
  const [position, setPosition] = useState<Position>({ top: 168, left: -10 });

  //useEffect(() => {
  ////Implementing the setInterval method
  //const interval = setInterval(() => {
  //setTick(tick + 1);
  //setPosition({
  //top: Math.ceil(position.top - 1.06),
  //left: Math.ceil(position.left + 1.06),
  //});
  //}, 1000);

  ////Clearing the interval
  //return () => clearInterval(interval);
  //}, [tick]);

  //console.log("f: count", count);
  return (
    <Section {...styles.wrapper}>
      <Section
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
        {...styles.handler}
      ></Section>
      <Section {...styles.outer}>
        <Section className="select-none" {...styles.inner}>
          <Text>85kg</Text>
        </Section>
      </Section>
    </Section>
  );
};
