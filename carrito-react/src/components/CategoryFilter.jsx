function CategoryFilter({
  categories,
  category,
  setCategory,
}) {
  return (
    <select
      className="border p-3 rounded w-full"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Todas</option>

      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;