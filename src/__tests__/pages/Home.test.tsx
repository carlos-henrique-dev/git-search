import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getuser } from "../../api/user";

import Home from "../../pages/Home";

const userResponse = {
  avatar_url: "https://avatars.githubusercontent.com/u/25385954?v=4",
  id: 25385954,
  location: "Amambai MS",
  login: "henriqueok20",
  name: "Carlos Henrique",
  public_repos: 33,
  repos_url: "https://api.github.com/users/henriqueok20/repos",
  url: "https://api.github.com/users/henriqueok20",
};

const server = setupServer(
  rest.get("https://api.github.com/users/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: userResponse,
        message: "Usuário encontrado",
      })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
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

test("Enable search if input is empty", () => {
  render(<Home />);
  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "Github User" } });
  expect(searchInput).toBeEnabled();
});

/* test("handles failure", async () => {
  server.use(
    rest.get("https://api.github.com/users/", (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({
          user: null,
          message: "Não encontrado",
        })
      );
    })
  );

  await expect(getuser("henriqueok2222")).rejects.toEqual({
    user: null,
    message: "Erro na requisição, tente novamente",
  });
}); */

/* test("Show result on click", () => {
  render(<Home />);
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "Github User" } });

  const searchButton = screen.getByTestId("search-button");
  fireEvent.click(searchButton, 1);

  const result = screen.getByTestId("result");
  expect(result).toBeInTheDocument();
}); */

// test("");
