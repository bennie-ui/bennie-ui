import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@phoenix-ui/baseline/tailwind/display/flex";
import { resolutions, getProperties } from "./utils";
import { ComponentProperties } from "@phoenix-ui/types";

describe("attributes.flex", () => {
  resolutions.forEach((res) => {
    variants.base.directions.forEach((direction) => {
      test(`:direction - ${res.value || "sm"}:${direction}`, () => {
        const direction_value = direction.substr(5, direction.length - 1);
        //console.log("f: direction_value", direction_value);
        const properties = getProperties(
          res.name,
          "flex",
          "direction",
          direction_value,
        );
        //console.log("f: getProperties", properties);
        const result = getClassByViewPort(properties as ComponentProperties);
        expect(result.trim()).toBe(
          res.name === "base"
            ? `flex  ${direction}`
            : `flex  ${res.value}:${direction}`,
        );
      });
    });
  });

  resolutions.forEach((res) => {
    variants.base.alignItems.forEach((alignItems) => {
      test(`:alignItems - ${res.value || "sm"}:${alignItems}`, () => {
        const align_value = alignItems.substr(6, alignItems.length - 1);

        const properties = getProperties(
          res.name,
          "flex",
          "alignItems",
          align_value,
        );
        const result = getClassByViewPort(properties as ComponentProperties);
        expect(result.trim()).toBe(
          res.name === "base"
            ? `flex  ${alignItems}`
            : `flex  ${res.value}:${alignItems}`,
        );
      });
    });
  });

  resolutions.forEach((res) => {
    variants.base.justifyContent.forEach((justifyContent) => {
      test(`:justifyContent - ${res.value || "sm"}:${justifyContent}`, () => {
        const justify_value = justifyContent.substr(
          8,
          justifyContent.length - 1,
        );

        const properties = getProperties(
          res.name,
          "flex",
          "justifyContent",
          justify_value,
        );
        const result = getClassByViewPort(properties as ComponentProperties);
        expect(result.trim()).toBe(
          res.name === "base"
            ? `flex  ${justifyContent}`
            : `flex  ${res.value}:${justifyContent}`,
        );
      });
    });
  });

  resolutions.forEach((res) => {
    variants.base.shrink.forEach((shrink) => {
      test(`:shrink ${res.value || "sm"}: ${shrink}`, () => {
        const shrink_value = shrink === "shrink" ? "1" : "0";
        const properties = getProperties(
          res.name,
          "flex",
          "shrink",
          shrink_value,
        );
        const result = getClassByViewPort(properties as ComponentProperties);
        expect(result.trim()).toBe(
          res.name === "base"
            ? `flex  ${shrink}`
            : `flex  ${res.value}:${shrink}`,
        );
      });
    });
  });

  resolutions.forEach((res) => {
    variants.base.grow.forEach((grow) => {
      test(`:grow ${res.value || "sm"}: ${grow}`, () => {
        const grow_value = grow === "grow" ? "1" : "0";

        const properties = getProperties(
          res.name,
          "flex",
          "grow",
          grow_value,
        ) as ClassByResponsiveProps;
        const result = getClassByViewPort(properties);
        expect(result.trim()).toBe(
          res.name === "base" ? `flex  ${grow}` : `flex  ${res.value}:${grow}`,
        );
      });
    });
  });

  //TODO: revision if flex basis is also needed for phase-1

  {
    //test(`:basis:px`, () => {
    //const basis = "px";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:auto`, () => {
    //const basis = "auto";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:full`, () => {
    //const basis = "full";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:number`, () => {
    //const basis = 1;
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basisdecimal`, () => {
    //const basis = 0.5;
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:halve`, () => {
    //const basis = "1/2";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:third`, () => {
    //const basis = "1/3";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:fourths`, () => {
    //const basis = "1/4";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:fifths`, () => {
    //const basis = "1/5";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:sixts`, () => {
    //const basis = "1/6";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
    //test(`:basis:twelves`, () => {
    //const basis = "1/12";
    //const properties: ClassByResponsiveProps = { flex: { basis } };
    //const result = getClassByViewPort(properties);
    //expect(result.trim()).toContain(`basis-${basis}`);
    //});
  }
});
