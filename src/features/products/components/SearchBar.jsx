function SearchBar({ query, onSearch }) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Rechercher un produit..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
