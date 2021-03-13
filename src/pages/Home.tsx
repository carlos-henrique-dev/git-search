import { useState } from "react";
import { getuser } from "../api/user";
import SearchBar from "../components/SearchBar";
import Layout from "../components/shared/Layout";
import UserDetails from "../components/UserDetails";
import ReposList from "../components/ReposList";

function Home() {
  const [searchResults, setSearchResult] = useState<null[] | any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const [reposList, setRepos] = useState([]);
  const [alertMessage, setAlertMessage] = useState("Nenhum repositório para mostrar");

  function handleSearch(query: string) {
    setSearchResult([]);
    setShowRepos(false);
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
    setShowRepos(true);
    setAlertMessage("Este usuário não possui nenhum repositório");
    setRepos(searchResults[1]);
  }

  function handleShowStarredRepos() {
    setShowRepos(true);
    setAlertMessage("Este usuário não curtiu nenhum repositório");
    setRepos(searchResults[2]);
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
        {showRepos && <ReposList data={reposList} message={alertMessage} />}
      </div>
    </Layout>
  );
}

export default Home;
