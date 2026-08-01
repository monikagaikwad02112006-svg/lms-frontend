import SuperAdminSidebar from "../../components/SuperAdminSidebar";
import "./BackupPlaceholder.css";

function BackupPlaceholder() {
  return (
    <div className="backup-layout">

      <SuperAdminSidebar />

      <div className="backup-page">

        <div className="backup-header">

          <h1>System Backup</h1>

          <p>
            Manage backups, recovery points, and system data protection.
          </p>

        </div>

        <div className="backup-grid">

          <div className="backup-card">

            <h3>Last Backup</h3>

            <h2>Today, 02:00 AM</h2>

            <span className="success">
              Successful
            </span>

          </div>

          <div className="backup-card">

            <h3>Total Backups</h3>

            <h2>145</h2>

            <span>
              Stored Securely
            </span>

          </div>

          <div className="backup-card">

            <h3>Storage Used</h3>

            <h2>68%</h2>

            <span>
              340 GB / 500 GB
            </span>

          </div>

          <div className="backup-card">

            <h3>Recovery Points</h3>

            <h2>32</h2>

            <span>
              Available
            </span>

          </div>

        </div>

        <div className="backup-actions-card">

          <h3>Backup Actions</h3>

          <p>
            Create a new backup or restore from an existing recovery point.
          </p>

          <div className="backup-buttons">

            <button className="backup-btn">
              Create Backup
            </button>

            <button className="restore-btn">
              Restore System
            </button>

          </div>

        </div>

        <div className="backup-table-card">

          <h3>Recent Backups</h3>

          <table>

            <thead>
              <tr>
                <th>Date</th>
                <th>Backup Type</th>
                <th>Size</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>24 Jul 2026</td>
                <td>Full Backup</td>
                <td>12 GB</td>
                <td className="success">Completed</td>
              </tr>

              <tr>
                <td>23 Jul 2026</td>
                <td>Incremental</td>
                <td>2.4 GB</td>
                <td className="success">Completed</td>
              </tr>

              <tr>
                <td>22 Jul 2026</td>
                <td>Incremental</td>
                <td>2.1 GB</td>
                <td className="success">Completed</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default BackupPlaceholder;