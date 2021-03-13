import { render, screen, cleanup } from "@testing-library/react";

import UserDetails from "../../components/UserDetails";

afterEach(() => {
  cleanup();
});

test("Shows alert message if no user was found", () => {
  const props = {
    data: {
      searchResult: null,
      message: "Não foram encontradas informações para o usuário digitado",
    },
  };

  render(<UserDetails {...props} />);
  const alertMessage = screen.getByTestId("alert-message");

  expect(alertMessage).toBeInTheDocument();
});

test("Shows user info", () => {
  const props = {
    data: {
      searchResult: {
        avatar_url: "url",
        name: "Fulano",
        login: "fulano",
        url: "https://github.com/wakc",
        bio: "perfil de fulano",
        followers: 10,
        following: 10,
      },
      message: null,
    },
  };

  render(<UserDetails {...props} />);
  const useDetails = screen.getByTestId("user-details");

  expect(useDetails).toBeInTheDocument();
});
