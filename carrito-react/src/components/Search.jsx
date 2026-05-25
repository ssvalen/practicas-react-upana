function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      className="border p-3 rounded w-full"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;