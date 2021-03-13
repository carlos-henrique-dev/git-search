import { useState } from "react";

type Props = {
  handleSearch: (query: string) => void;
  loading: boolean;
};

export default function SearchField({ handleSearch, loading }: Props) {
  const [query, setQuery] = useState("");

  function onChange(e: any) {
    setQuery(e.target.value);
  }

  function onSearch() {
    handleSearch(query);
  }

  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  }

  return (
    <div className="searchbar">
      <input
        onChange={onChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Digite um nome de usuário"
        data-testid="search-input"
      />
      <button data-testid="search-button" disabled={query === "" || loading} onClick={onSearch}>
        {loading ? <i className="fas fa-circle-notch fa-spin"></i> : "Buscar"}
      </button>
    </div>
  );
}
