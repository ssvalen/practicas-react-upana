function Filters({
  setFilterRoom,
  setFilterDate
}) {
  return (
    <div className="flex gap-2 mb-4">
      <select
        onChange={(e) =>
          setFilterRoom(e.target.value)
        }
        className="border p-2"
      >
        <option value="">Todas las salas</option>
        <option>Sala 1</option>
        <option>Sala 2</option>
        <option>Sala 3</option>
      </select>

      <input
        type="date"
        onChange={(e) =>
          setFilterDate(e.target.value)
        }
        className="border p-2"
      />
    </div>
  );
}

export default Filters;