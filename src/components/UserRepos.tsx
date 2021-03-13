import AlertMessage from "./shared/AlertMessage";

type Props = {
  loading: boolean;
  data: any;
};

export default function UserRepos({ loading, data }: Props) {
  if (data.searchResult?.length === 0) {
    return <AlertMessage message="Este usuário não possui nenhum repositório" />;
  }

  return (
    <div className="repos-grid">
      {data.searchResult.map((repo: any) => {
        return (
          <div className="card">
            <span className="name">{repo.name}</span>
            <span className="description">
              {repo.description !== null ? repo.description : "Este repositório não tem descrição"}
            </span>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              Abrir no Github
            </a>
          </div>
        );
      })}
    </div>
  );
}
