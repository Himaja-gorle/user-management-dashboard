import "./Toolbar.css";

function Toolbar({
  search,
  setSearch,
  sortField,
  setSortField,
  onAdd,
}) {
  return (
    <div className="toolbar">

      <input
        type="text"
        className="search-box"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={sortField}
        onChange={(e) => setSortField(e.target.value)}
      >
        <option value="id">Sort by ID</option>
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
      </select>

      <button
        className="add-btn"
        onClick={onAdd}
      >
        + Add User
      </button>

    </div>
  );
}

export default Toolbar;