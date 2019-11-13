import React from "react";
import App from "../App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<App />);
});

test("it displays a name component", () => {
  const { getAllByText } = render(<App />);
  getAllByText(/name/i);
});

test("it displays a country component", () => {
  const { getByText } = render(<App />);
  getByText(/country/i);
});

test("it displays a foul component", () => {
  const { getByText } = render(<App />);
  getByText(/searches/i);
});
