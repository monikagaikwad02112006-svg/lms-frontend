import SuperAdminSidebar from "../../components/SuperAdminSidebar";
import "./AuditLogs.css";

const auditLogs = [
  {
    id: 1,
    user: "Admin Sharma",
    action: "Created New Batch",
    module: "Batch Management",
    date: "26 Jul 2026",
    status: "Success",
  },
  {
    id: 2,
    user: "Super Admin",
    action: "Updated System Settings",
    module: "Settings",
    date: "25 Jul 2026",
    status: "Success",
  },
  {
    id: 3,
    user: "Admin Patel",
    action: "Deleted Course",
    module: "Course Management",
    date: "24 Jul 2026",
    status: "Warning",
  },
  {
    id: 4,
    user: "System",
    action: "Backup Completed",
    module: "Backup Service",
    date: "24 Jul 2026",
    status: "Success",
  },
];

function AuditLogs() {
  return (
    <div className="audit-layout">

      <SuperAdminSidebar />

      <div className="audit-page">

        <div className="audit-header">

          <h1>Audit Logs</h1>

          <p>
            Monitor user activities and system events across the platform.
          </p>

        </div>

        <div className="audit-search">

          <input
            type="text"
            placeholder="Search audit logs..."
          />

        </div>

        <div className="audit-table-card">

          <table>

            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Module</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {auditLogs.map((log) => (
                <tr key={log.id}>

                  <td>{log.user}</td>

                  <td>{log.action}</td>

                  <td>{log.module}</td>

                  <td>{log.date}</td>

                  <td>
                    <span
                      className={`audit-status ${log.status.toLowerCase()}`}
                    >
                      {log.status}
                    </span>
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

export default AuditLogs;