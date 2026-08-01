import SuperAdminSidebar from "../../components/SuperAdminSidebar";
import "./BranchManagement.css";

const branches = [
  {
    id: 1,
    name: "Pune Branch",
    manager: "Mr. Sharma",
    students: 1250,
    status: "Active",
  },
  {
    id: 2,
    name: "Mumbai Branch",
    manager: "Mrs. Patel",
    students: 980,
    status: "Active",
  },
  {
    id: 3,
    name: "Nagpur Branch",
    manager: "Mr. Verma",
    students: 650,
    status: "Upcoming",
  },
  {
    id: 4,
    name: "Nashik Branch",
    manager: "Mrs. Joshi",
    students: 540,
    status: "Inactive",
  },
];

function BranchManagement() {
  return (
    <div className="branch-layout">

      <SuperAdminSidebar />

      <div className="branch-page">

        <div className="branch-header">

          <div>
            <h1>Branch Management</h1>
            <p>Manage all LMS branches and operations.</p>
          </div>

          <button className="add-branch-btn">
            + Add Branch
          </button>

        </div>

        <div className="branch-table-card">

          <table>

            <thead>
              <tr>
                <th>Branch Name</th>
                <th>Manager</th>
                <th>Students</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {branches.map((branch) => (
                <tr key={branch.id}>

                  <td>{branch.name}</td>

                  <td>{branch.manager}</td>

                  <td>{branch.students}</td>

                  <td>
                    <span
                      className={`branch-status ${branch.status.toLowerCase()}`}
                    >
                      {branch.status}
                    </span>
                  </td>

                  <td>

                    <div className="branch-actions">

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

    </div>
  );
}

export default BranchManagement;