import { describe, test, expect } from "bun:test";
import { render } from "@testing-library/react";
import { Text } from "./text.js";

describe("should test react-text component", () => {
  test(":default", () => {
    const text = <Text>Hello World</Text>;
    const { container } = render(text);

    expect(container.querySelector("span")?.innerHTML).toEqual("Hello World");
  });

  test(":custom tag", () => {
    const text = <Text tag="p">Hello World</Text>;
    const { container } = render(text);

    expect(container.querySelector("p")?.innerHTML).toEqual("Hello World");
  });

  test(":className should be applied", () => {
    const text = <Text className="custom-class">Hello World</Text>;
    const { container } = render(text);

    expect(container.querySelector("span")?.className).toContain(
      "custom-class",
    );
  });

  test(":css prop should apply styles", () => {
    const text = (
      <Text css={{ fontSize: "2xl", color: "red.500" }}>Hello World</Text>
    );
    const { container } = render(text);
    const element = container.querySelector("span");

    expect(element?.className).toBeTruthy();
  });

  test(":id should be applied", () => {
    const text = <Text id="test-id">Hello World</Text>;
    const { container } = render(text);

    expect(container.querySelector("span")?.id).toEqual("test-id");
  });

  test(":dataTestId should be applied", () => {
    const text = <Text dataTestId="test-text">Hello World</Text>;
    const { getByTestId } = render(text);

    expect(getByTestId("test-text")).toBeTruthy();
  });
});
