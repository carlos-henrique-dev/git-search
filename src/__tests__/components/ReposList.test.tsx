import { render, screen, cleanup } from "@testing-library/react";

import ReposList from "../../components/ReposList";

afterEach(() => {
  cleanup();
});

test("Shows alert if repo array is empty", async () => {
  const props = {
    data: {
      searchResult: [],
    },
    message: "Nenhum repositório encontrado",
  };

  render(<ReposList {...props} />);

  const alertMessage = screen.getByTestId("alert-message");
  expect(alertMessage).toBeInTheDocument();
});

test("Shows repositories list", async () => {
  const props = {
    data: {
      searchResult: [
        { id: 1, name: "Repositório teste", description: "Descrição teste", html_url: "https://www.google.com" },
      ],
    },
    message: null,
  };

  render(<ReposList {...props} />);

  const reposList = screen.getByTestId("repos-list");
  expect(reposList).toBeInTheDocument();
});
