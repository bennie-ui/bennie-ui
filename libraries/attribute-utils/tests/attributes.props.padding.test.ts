import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "../types";
import { variants } from "@phoenix-ui/baseline/components/sizing/padding";
import { AllPaddings } from "@phoenix-ui/types/spacing";
import { resolutions, getProperties } from "./utils";

describe("attributes.props.padding", () => {
  test(`padding :all`, () => {
    resolutions.forEach((res) => {
      variants.base.all.split(" ").forEach((all) => {
        const properties = getProperties(res.name, "padding", "all", all);

        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? all : `${res.value}:${all}`
        );
      });
    });
  });

  test(`padding :x`, () => {
    resolutions.forEach((res) => {
      variants.base.x.split(" ").forEach((x) => {
        const properties = getProperties(res.name, "padding", "x", x);

        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? x : `${res.value}:${x}`
        );
      });
    });
  });

  test(`padding :y`, () => {
    resolutions.forEach((res) => {
      variants.base.y.split(" ").forEach((y) => {
        const properties = getProperties(res.name, "padding", "y", y);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? y : `${res.value}:${y}`
        );
      });
    });
  });

  test(`padding :top`, () => {
    resolutions.forEach((res) => {
      variants.base.top.split(" ").forEach((top) => {
        const properties = getProperties(res.name, "padding", "top", top);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? top : `${res.value}:${top}`
        );
      });
    });
  });

  test(`padding :bottom`, () => {
    resolutions.forEach((res) => {
      variants.base.bottom.split(" ").forEach((bottom) => {
        const properties = getProperties(res.name, "padding", "bottom", bottom);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? bottom : `${res.value}:${bottom}`
        );
      });
    });
  });

  test(`padding :left`, () => {
    resolutions.forEach((res) => {
      variants.base.left.split(" ").forEach((left) => {
        const properties = getProperties(res.name, "padding", "left", left);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? left : `${res.value}:${left}`
        );
      });
    });
  });

  test(`padding :right`, () => {
    resolutions.forEach((res) => {
      variants.base.right.split(" ").forEach((right) => {
        const properties = getProperties(res.name, "padding", "right", right);
        const result = getClassByViewPort(properties as ClassByResponsiveProps);
        expect(result.trim()).toBe(
          res.name === "base" ? right : `${res.value}:${right}`
        );
      });
    });
  });

  test(`:combined (left, right, top, bottom)`, () => {
    resolutions.forEach((res) => {
      const left_padding = "pl-0";
      const right_padding = "pr-0";
      const top_padding = "pt-0";
      const bottom_padding = "pb-0";

      const padding: AllPaddings = {
        left: left_padding,
        right: right_padding,
        top: top_padding,
        bottom: bottom_padding,
      };
      const properties: ClassByResponsiveProps =
        res.name === "base"
          ? { padding }
          : { overrides: { [res.name]: { padding } } };

      const result = getClassByViewPort(properties);
      expect(result.trim()).toContain(
        res.name === "base" ? left_padding : `${res.value}:${left_padding}`
      );
      expect(result.trim()).toContain(
        res.name === "base" ? right_padding : `${res.value}:${right_padding}`
      );
      expect(result.trim()).toContain(
        res.name === "base" ? top_padding : `${res.value}:${top_padding}`
      );
      expect(result.trim()).toContain(
        res.name === "base" ? bottom_padding : `${res.value}:${bottom_padding}`
      );
    });
  });

  test(`:combined (x,y)`, () => {
    resolutions.forEach((res) => {
      const x_padding = "px-0";
      const y_padding = "py-0";

      const padding: AllPaddings = {
        x: x_padding,
        y: y_padding,
      };
      const properties: ClassByResponsiveProps =
        res.name === "base"
          ? { padding }
          : { overrides: { [res.name]: { padding } } };

      const result = getClassByViewPort(properties);

      expect(result.trim()).toContain(
        res.name === "base" ? x_padding : `${res.value}:${x_padding}`
      );
      expect(result.trim()).toContain(
        res.name === "base" ? y_padding : `${res.value}:${y_padding}`
      );
    });
  });
});
