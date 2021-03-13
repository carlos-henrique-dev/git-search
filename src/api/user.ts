import axios from "axios";

function fetchData(url: string) {
  return axios
    .get(url)
    .then((res: any) => {
      return { searchResult: res.data, message: null };
    })
    .catch((err) => {
      let message = "Erro na requisição, tente novamente";
      if (err.response.status === 404) {
        message = "Não foram encontradas informações para o usuário digitado";
      }
      return { searchResult: null, message };
    });
}

export function getuser(username: string) {
  const urls = [
    `https://api.github.com/users/${username}`,
    `https://api.github.com/users/${username}/repos`,
    `https://api.github.com/users/${username}/starred`,
  ];

  const promises = urls.map(fetchData);

  return Promise.all(promises)
    .then((response) => response)
    .catch((err) => ({ searchResult: null, message: "Ocorreu um erro na busca, tente novamente" }));
}
