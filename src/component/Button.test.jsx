//Button.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  // Runs before each test
  beforeEach(() => {
    render(<Button label="Click Me" />);
  });

  test("renders button with correct label", () => {
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  test("increments counter on click", () => {
    const button = screen.getByText("Click Me");

    // Initial text
    expect(screen.getByText("Clicked 0 times")).toBeInTheDocument();

    // Simulate click
    fireEvent.click(button);
    expect(screen.getByText("Clicked 1 times")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText("Clicked 2 times")).toBeInTheDocument();
  });

  test("Button matches snapshot", () => {
    const { asFragment } = render(<Button label="Click Me" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
