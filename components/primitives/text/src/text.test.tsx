import React from "react";

import { describe, test, expect } from "bun:test";
import { render } from "@testing-library/react";
import { Text } from "./text.js";

describe("should test react-text component", () => {
  test(":default", () => {
    const text = <Text>Hello World</Text>;
    const { container } = render(text);

    expect(container.querySelector("span").innerHTML).toEqual("Hello World");
  });

  test(":size", () => {
    const text = (
      <Text
        size="text-sm"
        overrides={{ medium: { size: "text-lg" }, large: { size: "text-3xl" } }}
      >
        Hello World
      </Text>
    );
    const { container } = render(text);

    expect(container.querySelector("span")?.className).toEqual(
      "text-sm md:text-lg lg:text-3xl"
    );
  });
});
