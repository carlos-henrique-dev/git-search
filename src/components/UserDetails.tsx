type Props = {
  loading: boolean;
  onShowRepos: () => void;
  onShowStarredRepos: () => void;
  data: {
    searchResult: object;
    message: string;
  };
};

export default function UserDetails({ loading, data, onShowRepos, onShowStarredRepos }: Props) {
  if (!loading && !data) {
    return null;
  }

  if (loading) {
    return <div>Carregando</div>;
  }

  if (!loading && !data?.searchResult && data.message) {
    return <div>{data.message}</div>;
  }

  return (
    <div>
      <button onClick={onShowRepos}>Repositórios do usuário</button>
      <button onClick={onShowStarredRepos}>Repositórios curtidos pelo usuário</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
