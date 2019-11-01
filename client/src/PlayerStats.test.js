import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<App />);
});

it("it displays a dark mode option", () => {
  const { getByText } = render(<App />);
  getByText(/dark mode/i);
});
