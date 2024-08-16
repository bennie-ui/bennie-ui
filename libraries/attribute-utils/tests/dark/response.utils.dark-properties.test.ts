import { describe, test, expect } from "bun:test";
import { ColorValue, ColorWeight } from "@phoenix-ui/types/attributes";
import { getClassByViewPort } from "../../src/attributes.classes.utils";
import { ClassByResponsiveProps } from "../../types";

// TODO: this test needs more work
describe("dark properties", () => {
  describe(":dark:color", () => {
    test(`:dark:text-\${$color-value} default weight`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "cyan";
      const properties: ClassByResponsiveProps = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `text-${color}-500 dark:text-${dark_color}-500`,
      );
    });

    test(`:dark:text-\${$color-value} plus weight `, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "cyan";
      const weight: ColorWeight = "200";
      const properties: ClassByResponsiveProps = {
        colors: {
          text: { color, weight },
        },
        dark: {
          colors: { text: { color: dark_color } },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `text-${color}-200 dark:text-${dark_color}-500`,
      );
    });

    test(`:dark:bg-\${$color-value} default weight`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "cyan";
      const properties: ClassByResponsiveProps = {
        colors: {
          background: { color },
        },
        dark: {
          colors: {
            background: { color: dark_color },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(`bg-${color}-500 dark:bg-${dark_color}-500`);
    });

    test(`:dark:bg-\${$color-value} plus weight `, () => {
      const color: ColorValue = "blue";
      const weight: ColorWeight = "200";
      const dark_color: ColorValue = "cyan";
      const properties: ClassByResponsiveProps = {
        colors: {
          background: { color, weight },
        },
        dark: {
          colors: {
            background: { color: dark_color },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(`bg-${color}-200 dark:bg-${dark_color}-500`);
    });
  });
});
