import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "../types";
import { variants } from "@phoenix-ui/baseline/components/sizing/margin";
import { AllMargins } from "@phoenix-ui/types/spacing";
import { resolutions, getProperties } from "./utils";

describe("attributes.props.margin", () => {
  test(`margin :all`, () => {
    resolutions.forEach((res) => {
      variants.base.all.split(" ").forEach((all) => {
        const properties = getProperties(res.name, "margin", "all", all);

        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? all : `${res.value}:${all}`
        );
      });
    });
  });

  test(`margin :x`, () => {
    resolutions.forEach((res) => {
      variants.base.x.split(" ").forEach((x) => {
        const properties = getProperties(res.name, "margin", "x", x);

        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? x : `${res.value}:${x}`
        );
      });
    });
  });

  test(`margin :y`, () => {
    resolutions.forEach((res) => {
      variants.base.y.split(" ").forEach((y) => {
        const properties = getProperties(res.name, "margin", "y", y);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? y : `${res.value}:${y}`
        );
      });
    });
  });

  test(`margin :top`, () => {
    resolutions.forEach((res) => {
      variants.base.top.split(" ").forEach((top) => {
        const properties = getProperties(res.name, "margin", "top", top);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? top : `${res.value}:${top}`
        );
      });
    });
  });

  test(`margin :bottom`, () => {
    resolutions.forEach((res) => {
      variants.base.bottom.split(" ").forEach((bottom) => {
        const properties = getProperties(res.name, "margin", "bottom", bottom);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? bottom : `${res.value}:${bottom}`
        );
      });
    });
  });

  test(`margin :left`, () => {
    resolutions.forEach((res) => {
      variants.base.left.split(" ").forEach((left) => {
        const properties = getProperties(res.name, "margin", "left", left);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? left : `${res.value}:${left}`
        );
      });
    });
  });

  test(`margin :right`, () => {
    resolutions.forEach((res) => {
      variants.base.right.split(" ").forEach((right) => {
        const properties = getProperties(res.name, "margin", "right", right);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? right : `${res.value}:${right}`
        );
      });
    });
  });

  test(`:combined (left, right, top, bottom)`, () => {
    resolutions.forEach((res) => {
      const left_margin = "ml-0";
      const right_margin = "mr-0";
      const top_margin = "mt-0";
      const bottom_margin = "mb-0";

      const margin: AllMargins = {
        left: left_margin,
        right: right_margin,
        top: top_margin,
        bottom: bottom_margin,
      };
      const properties: ClassByResponsiveProps =
        res.name === "base"
          ? { margin }
          : { overrides: { [res.name]: { margin } } };

      const result = getClassByViewPort(properties);
      expect(result.trim()).toContain(
        res.name === "base" ? left_margin : `${res.value}:${left_margin}`
      );
      expect(result.trim()).toContain(
        res.name === "base" ? right_margin : `${res.value}:${right_margin}`
      );
      expect(result.trim()).toContain(
        res.name === "base" ? top_margin : `${res.value}:${top_margin}`
      );
      expect(result.trim()).toContain(
        res.name === "base" ? bottom_margin : `${res.value}:${bottom_margin}`
      );
    });
  });

  test(`:combined (x,y)`, () => {
    resolutions.forEach((res) => {
      const x_margin = "mx-0";
      const y_margin = "my-0";

      const margin: AllMargins = {
        x: x_margin,
        y: y_margin,
      };
      const properties: ClassByResponsiveProps =
        res.name === "base"
          ? { margin }
          : { overrides: { [res.name]: { margin } } };

      const result = getClassByViewPort(properties);

      expect(result.trim()).toContain(
        res.name === "base" ? x_margin : `${res.value}:${x_margin}`
      );
      expect(result.trim()).toContain(
        res.name === "base" ? y_margin : `${res.value}:${y_margin}`
      );
    });
  });
});
