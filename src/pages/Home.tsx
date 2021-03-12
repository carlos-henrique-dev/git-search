function SearchInput() {
  return (
    <div>
      <input type="text" placeholder="Pesquise um usuário..." data-testid="search-input" />
      <button data-testid="search-button">Buscar</button>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Git Search</h1>
      <h4>Busque por um usuário do github e veja seus repositórios</h4>
      {SearchInput()}
    </div>
  );
}

export default Home;
