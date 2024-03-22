import { describe, test, expect, mock } from "bun:test";
import {
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getClassByViewPort,
} from "@phoenix-ui/attribute-utils";
import { getProperties } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from "@phoenix-ui/attribute-utils/types";
import type {
  TextColorType,
  BackgroundColorType,
} from "@phoenix-ui/types/attributes";
import { ComponentProperties } from "@phoenix-ui/types/components";

describe("base-attribute", () => {
  describe(":getTextColorAttribute", () => {
    test(" should return default values", () => {
      const color: TextColorType = {};
      const result = getTextColorAttribute(color);
      expect(result).toEqual("text-white");
    });

    test(" should return black or white without weight", () => {
      let color: TextColorType = { color: "text-black" };
      let result = getTextColorAttribute(color);
      expect(result).toEqual("text-black");

      color = { color: "text-black", weight: "300" };
      result = getTextColorAttribute(color);
      expect(result).toEqual("text-black");

      color = { color: "text-white" };
      result = getTextColorAttribute(color);
      expect(result).toEqual("text-white");

      color = { color: "text-white", weight: "300" };
      result = getTextColorAttribute(color);
      expect(result).toEqual("text-white");
    });
  });

  describe(":getBackgroundColorAttribute", () => {
    test(" should return default values", () => {
      const color: BackgroundColorType = {};
      const result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-slate-400");
    });

    test(" should return black or white without weight", () => {
      let color: BackgroundColorType = { color: "bg-black" };
      let result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-black");

      color = { color: "bg-black", weight: "300" };
      result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-black");

      color = { color: "bg-white" };
      result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-white");

      color = { color: "bg-white", weight: "300" };
      result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-white");
    });
  });

  describe("base-properties", () => {
    test("should return properties className", () => {
      const properties: ComponentProperties = {
        size: "text-3xl",
        className: "foo",
      };
      const result = getProperties(properties);
      expect(result.className).toContain(properties.className);
      expect(result.className).toContain(properties.size);
    });

    test("should return add data-testid", () => {
      const properties: ComponentProperties = {
        dataTestId: "foo-test-id",
      };
      const result = getProperties(properties);
      expect(result["data-testid"]).toContain(properties.dataTestId);
    });

    test("should return onClickEvent", () => {
      const onClickSpy = mock();
      const properties: ComponentProperties = {
        onClick: onClickSpy,
      };
      const result = getProperties(properties);
      expect(result.onClick).toBe(onClickSpy);
    });
  });
});

describe("responsive utils", () => {
  describe("getClassByViewPort", () => {
    test("empty properties", () => {
      const properties: ClassByResponsiveProps = {};
      const result = getClassByViewPort(properties);
      expect(result).toBe("");
    });

    test("doesnt throw properties", () => {
      const properties: ClassByResponsiveProps = { size: undefined };
      const result = getClassByViewPort(properties);
      expect(result).toBe("");
    });
  });
});
