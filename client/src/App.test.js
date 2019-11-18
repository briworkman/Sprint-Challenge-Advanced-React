import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";
import { render } from "@testing-library/react";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug();
});

test("it displays an navbar component", () => {
  const { getAllByText } = rtl.render(<App />);
  getAllByText(/Womens World Cup Roster/i);
});
