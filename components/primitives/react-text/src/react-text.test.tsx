import React from "react";

import { describe, test, expect } from "bun:test";
import { render } from "@testing-library/react";
import { Text } from "./react-text.tsx";

describe("should test react-text component", () => {
  test(":default", () => {
    const text = <Text>Hello World</Text>;
    const { container } = render(text);

    expect(container.querySelector("span").innerHTML).toEqual("Hello World");
  });
});
