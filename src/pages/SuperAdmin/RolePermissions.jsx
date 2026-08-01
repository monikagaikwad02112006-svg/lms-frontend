import SuperAdminSidebar from "../../components/SuperAdminSidebar";
import "./RolePermissions.css";

const roles = [
  {
    role: "Super Admin",
    permissions: "Full Access",
    status: "Active",
  },
  {
    role: "Admin",
    permissions: "Manage LMS",
    status: "Active",
  },
  {
    role: "Teacher",
    permissions: "Manage Classes",
    status: "Active",
  },
  {
    role: "Student",
    permissions: "View Learning Content",
    status: "Active",
  },
];

function RolePermissions() {
  return (
    <div className="role-layout">

      <SuperAdminSidebar />

      <div className="role-page">

        <div className="role-header">

          <div>
            <h1>Role & Permissions</h1>
            <p>
              Manage user roles and access permissions across the LMS.
            </p>
          </div>

          <button className="add-role-btn">
            + Create Role
          </button>

        </div>

        <div className="role-table-card">

          <table>

            <thead>
              <tr>
                <th>Role</th>
                <th>Permissions</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {roles.map((item, index) => (
                <tr key={index}>

                  <td>{item.role}</td>

                  <td>{item.permissions}</td>

                  <td>
                    <span className="role-status active">
                      {item.status}
                    </span>
                  </td>

                  <td>

                    <div className="role-actions">

                      <button className="view-btn">
                        View
                      </button>

                      <button className="edit-btn">
                        Edit
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

export default RolePermissions;