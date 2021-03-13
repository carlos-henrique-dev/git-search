import { useEffect, useState } from "react";
import AlertMessage from "./shared/AlertMessage";

type Props = {
  onShowRepos?: () => void;
  onShowStarredRepos?: () => void;
  data: {
    searchResult: any | null;
    message: string | null;
  };
};

export default function UserDetails({ data, onShowRepos, onShowStarredRepos }: Props) {
  const { searchResult, message } = data;

  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (searchResult !== null) {
      setAvatarUrl(searchResult.avatar_url);
    }
  }, [searchResult]);

  const onError = () => setAvatarUrl("/avatar.png");

  if (!searchResult) {
    return <AlertMessage message={message} />;
  }

  return (
    <>
      <div className="details-container" data-testid="user-details">
        <div className="user">
          <img src={avatarUrl} alt="user github profile avatar" onError={onError} />
          <a href={searchResult.url}>{searchResult.name !== null ? searchResult.name : searchResult.login}</a>
          <span>{searchResult.bio}</span>
        </div>
        <div className="info">
          <span>Seguidores: {searchResult.followers}</span>
          <span>Seguindo: {searchResult.following}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={onShowRepos} data-testid="show-user-repos">
          Repositórios do usuário
        </button>
        <button onClick={onShowStarredRepos}>Repositórios curtidos pelo usuário</button>
      </div>
    </>
  );
}
