import "./Assignments.css";

const assignments = [
  {
    id: 1,
    title: "React Components Assignment",
    subject: "Web Development",
    dueDate: "25 July 2026",
    status: "Pending",
  },
  {
    id: 2,
    title: "Database Design Project",
    subject: "DBMS",
    dueDate: "20 July 2026",
    status: "Submitted",
  },
  {
    id: 3,
    title: "Operating System Report",
    subject: "OS",
    dueDate: "15 July 2026",
    status: "Late",
  },
];

export default function Assignments() {
  return (
    <div className="assignments-page">
      <div className="page-header">
        <div>
          <h1>assignments</h1>
          <p>Manage and track your academic assignments</p>
        </div>

        <button className="primary-btn">
          View Calendar
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>12</h3>
          <span>Total</span>
        </div>

        <div className="stat-card">
          <h3>5</h3>
          <span>Pending</span>
        </div>

        <div className="stat-card">
          <h3>6</h3>
          <span>Submitted</span>
        </div>

        <div className="stat-card">
          <h3>1</h3>
          <span>Late</span>
        </div>
      </div>

      <div className="assignments-card">
        <div className="card-header">
          <h2>Assignment List</h2>

          <input
            type="text"
            placeholder="Search assignments..."
            className="search-input"
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.title}</td>
                <td>{assignment.subject}</td>
                <td>{assignment.dueDate}</td>

                <td>
                  <span
                    className={`status-badge ${assignment.status.toLowerCase()}`}
                  >
                    {assignment.status}
                  </span>
                </td>

                <td>
                  <button className="view-btn">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}