import { useState } from "react";
import { getuser } from "../api/user";
import SearchBar from "../components/SearchBar";
import Layout from "../components/shared/Layout";
import UserDetails from "../components/UserDetails";
import UserRepos from "../components/UserRepos";
import UserStarredRepos from "../components/UserStarredRepos";

function Home() {
  const [searchResults, setSearchResult] = useState<null[] | any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const [showStarredRepos, setShowStarredRepos] = useState(false);

  function handleSearch(query: string) {
    setSearchResult([]);
    setShowRepos(false);
    setShowStarredRepos(false);
    setLoading(true);

    getuser(query)
      .then((result: any) => {
        setSearchResult(result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  function handleShowRepos() {
    setShowRepos(!showRepos);
    setShowStarredRepos(false);
  }
  function handleShowStarredRepos() {
    setShowRepos(false);
    setShowStarredRepos(!showStarredRepos);
  }

  return (
    <Layout>
      <div className="home-container">
        <h1>GIT SEARCH</h1>
        <h4>Busque por um usuário do github e veja seus repositórios</h4>
        <SearchBar handleSearch={handleSearch} loading={loading} />
        {searchResults[0] && (
          <UserDetails
            data={searchResults[0]}
            onShowRepos={handleShowRepos}
            onShowStarredRepos={handleShowStarredRepos}
          />
        )}
        {showRepos && <UserRepos loading={loading} data={searchResults[1]} />}
        {showStarredRepos && <UserStarredRepos loading={loading} data={searchResults[2]} />}
      </div>
    </Layout>
  );
}

export default Home;
