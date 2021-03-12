import { render, screen, cleanup } from "@testing-library/react";

import Home from "../../pages/Home";

afterEach(cleanup);

test("Loads and display the search field", () => {
  render(<Home />);
  const searchInput = screen.getByTestId("search-input");
  const searchButton = screen.getByTestId("search-button");

  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

/* test("should render completed search item component", () => {
  const props = {
    todo: { id: 1, title: "test test", completed: true },
  };

  render(<SearchItem {...props} />);
  const searchItemElement = screen.getByTestId("searchItem"); 

  expect(searchItemElement).toBeInTheDocument();
  expect(searchItemElement).toHaveTextContent("test test");
  expect(searchItemElement).toContainHTML("<span>");
});
 */
