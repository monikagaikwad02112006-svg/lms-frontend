import "./FilterBar.css";

export default function FilterBar({
  search,
  setSearch,
  subject,
  setSubject,
  status,
  setStatus,
  onReset,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-left">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
        />

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="filter-select"
        >
          <option value="">All Subjects</option>
          <option value="react">React</option>
          <option value="dbms">DBMS</option>
          <option value="os">Operating Systems</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="filter-select"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="late">Late</option>
        </select>
      </div>

      <button
        className="reset-btn"
        onClick={onReset}
      >
        Reset Filters
      </button>
    </div>
  );
}