import AlertMessage from "./shared/AlertMessage";

type Props = {
  data: any;
  message?: string | null;
};

export default function UserRepos({ data, message }: Props) {
  if (data.searchResult?.length === 0) {
    return <AlertMessage message={message} />;
  }

  return (
    <div className="repos-grid" data-testid="repos-list">
      {data?.searchResult &&
        data.searchResult.map((repo: any) => {
          return (
            <div className="card" key={repo.id}>
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
