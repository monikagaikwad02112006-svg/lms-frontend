import "./AssignmentManagement.css";

const assignments = [
  {
    id: 1,
    title: "React Dashboard Project",
    subject: "Web Development",
    dueDate: "2025-07-30",
    submissions: 45,
    status: "Active",
  },
  {
    id: 2,
    title: "Database ER Diagram",
    subject: "DBMS",
    dueDate: "2025-08-05",
    submissions: 32,
    status: "Pending",
  },
  {
    id: 3,
    title: "Java OOP Assignment",
    subject: "Java",
    dueDate: "2025-07-20",
    submissions: 50,
    status: "Completed",
  },
];

function AssignmentManagement() {
  return (
    <div className="assignment-management">
      <div className="page-header">
        <div>
          <h1>Assignment Management</h1>
          <p>Create, manage and review assignments</p>
        </div>

        <button className="create-btn">
          + Create Assignment
        </button>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search assignments..."
          className="search-input"
        />

        <select className="filter-select">
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Submissions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.title}</td>
                <td>{assignment.subject}</td>
                <td>{assignment.dueDate}</td>
                <td>{assignment.submissions}</td>

                <td>
                  <span
                    className={`status-badge ${assignment.status.toLowerCase()}`}
                  >
                    {assignment.status}
                  </span>
                </td>

                <td>
                  <div className="action-buttons">
                    <button className="view-btn">
                      View
                    </button>

                    <button className="edit-btn">
                      Edit
                    </button>

                    <button className="delete-btn">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignmentManagement;