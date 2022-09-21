import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Cart from "./components/Cart";

test("renders App container div", () => {
  render(<App />);
  const appContainer = screen.getByTestId("App");
  expect(appContainer).toBeInTheDocument();
});

test("cart renders cart string", () => {
  render(<Cart />);
  const linkElement = screen.getByText(/cart/i);
  expect(linkElement).toBeInTheDocument();
});
