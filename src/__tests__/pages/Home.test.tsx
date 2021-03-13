import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Home from "../../pages/Home";

afterEach(() => {
  cleanup();
});

test("Loads and display the search field", () => {
  render(<Home />);
  const searchInput = screen.getByTestId("search-input");
  const searchButton = screen.getByTestId("search-button");

  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test("Disable search if input is empty", () => {
  render(<Home />);
  const searchButton = screen.getByTestId("search-button");

  expect(searchButton).toBeDisabled();
});

test("Enable search if input isn't empty", () => {
  render(<Home />);
  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "Github User" } });
  expect(searchInput).toBeEnabled();
});
