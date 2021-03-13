type Props = {
  loading: boolean;
  data: {
    searchResult: object;
    message: string;
  };
};

export default function UserRepos({ loading, data }: Props) {
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
