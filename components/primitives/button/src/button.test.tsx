import { describe, test, expect, mock } from "bun:test";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./button";
import { type ButtonProperties } from "./button.types";

describe("Button", () => {
  test(":default", () => {
    const button = <Button>Hello World</Button>;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
    expect(buttonElement?.textContent).toEqual("Hello World");
  });

  test(":variant primary", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      variant: "primary",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
    expect(buttonElement?.className).toContain("c_");
  });

  test(":variant neutral", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      variant: "neutral",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
  });

  test(":variant success", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      variant: "success",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
  });

  test(":variant danger", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      variant: "danger",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
  });

  test(":size small", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      size: "small",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
  });

  test(":size medium", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      size: "medium",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
  });

  test(":size large", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      size: "large",
      variant: "neutral",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
  });

  test(":fullWidth", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      fullWidth: true,
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeTruthy();
  });

  test(":onClickEvent", () => {
    const onClickSpy = mock();
    const testId = "test-button";
    const props: ButtonProperties = {
      children: "Hello World",
      onClick: onClickSpy,
      dataTestId: testId,
    };

    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(testId);
    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });

  test(":disabled", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      disabled: true,
    };
    const { container } = render(<Button {...props} />);

    expect(container.querySelector("button")?.hasAttribute("disabled")).toBe(
      true,
    );
  });

  test(":className should be applied", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      className: "custom-class",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toContain(
      "custom-class",
    );
  });

  test(":id should be applied", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      id: "test-id",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.id).toEqual("test-id");
  });
});
