import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@phoenix-ui/baseline/tailwind/display/flex";
import type { ClassByResponsiveProps } from "../types";
import { resolutions, getProperties } from "./utils";

// TODO: Fix this tests
describe.skip("attributes.flex", () => {
  test(`:direction`, () => {
    resolutions.forEach((res) => {
      variants.base.directions.split(" ").forEach((direction) => {
        const properties = getProperties(
          res.name,
          "flex",
          "direction",
          direction,
        ) as ClassByResponsiveProps;
        const result = getClassByViewPort(properties);
        expect(result.trim()).toBe(
          res.name === "base" ? direction : `${res.value}:${direction}`,
        );
      });
    });
  });

  test(`:shrink`, () => {
    resolutions.forEach((res) => {
      variants.base.shrink.split(" ").forEach((shrink) => {
        const properties = getProperties(
          res.name,
          "flex",
          "shrink",
          shrink,
        ) as ClassByResponsiveProps;
        const result = getClassByViewPort(properties);
        expect(result.trim()).toBe(
          res.name === "base" ? shrink : `${res.value}:${shrink}`,
        );
      });
    });
  });

  test(`:grow`, () => {
    resolutions.forEach((res) => {
      variants.base.grow.split(" ").forEach((grow) => {
        const properties = getProperties(
          res.name,
          "flex",
          "grow",
          grow,
        ) as ClassByResponsiveProps;
        const result = getClassByViewPort(properties);
        expect(result.trim()).toBe(
          res.name === "base" ? grow : `${res.value}:${grow}`,
        );
      });
    });
  });

  test(`:alignItems`, () => {
    resolutions.forEach((res) => {
      variants.base.alignItems.split(" ").forEach((alignItems) => {
        const properties = getProperties(
          res.name,
          "flex",
          "alignItems",
          alignItems,
        ) as ClassByResponsiveProps;
        const result = getClassByViewPort(properties);
        expect(result.trim()).toBe(
          res.name === "base" ? alignItems : `${res.value}:${alignItems}`,
        );
      });
    });
  });

  test(`:justifyContent`, () => {
    resolutions.forEach((res) => {
      variants.base.justifyContent.split(" ").forEach((justifyContent) => {
        const properties = getProperties(
          res.name,
          "flex",
          "justifyContent",
          justifyContent,
        ) as ClassByResponsiveProps;
        const result = getClassByViewPort(properties);
        expect(result.trim()).toBe(
          res.name === "base"
            ? justifyContent
            : `${res.value}:${justifyContent}`,
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
