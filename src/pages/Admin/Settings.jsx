import AdminSidebar from "../../components/AdminSidebar";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings-layout">

      <AdminSidebar />

      <div className="settings-page">

        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage platform settings and preferences.</p>
        </div>

        <div className="settings-card">

          <div className="settings-section">

            <h3>General Settings</h3>

            <div className="setting-item">
              <label>Platform Name</label>
              <input
                type="text"
                placeholder="LMS Platform"
              />
            </div>

            <div className="setting-item">
              <label>Admin Email</label>
              <input
                type="email"
                placeholder="admin@lms.com"
              />
            </div>

          </div>

          <div className="settings-section">

            <h3>Notification Settings</h3>

            <div className="toggle-row">
              <span>Email Notifications</span>
              <div className="toggle-switch"></div>
            </div>

            <div className="toggle-row">
              <span>System Alerts</span>
              <div className="toggle-switch"></div>
            </div>

            <div className="toggle-row">
              <span>Course Updates</span>
              <div className="toggle-switch"></div>
            </div>

          </div>

          <div className="settings-section">

            <h3>Security Settings</h3>

            <div className="setting-item">
              <label>Change Password</label>
              <input
                type="password"
                placeholder="Enter new password"
              />
            </div>

            <div className="setting-item">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
              />
            </div>

          </div>

          <div className="settings-section">

            <h3>Platform Description</h3>

            <div className="setting-item">
              <textarea
                placeholder="Write platform description..."
              ></textarea>
            </div>

          </div>

          <div className="settings-actions">

            <button className="save-btn">
              Save Changes
            </button>

            <button className="reset-btn">
              Reset Settings
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;