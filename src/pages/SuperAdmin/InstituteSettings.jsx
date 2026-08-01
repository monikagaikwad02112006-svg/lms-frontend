import SuperAdminSidebar from "../../components/SuperAdminSidebar";
import "./InstituteSettings.css";

function InstituteSettings() {
  return (
    <div className="settings-layout">

      <SuperAdminSidebar />

      <div className="settings-page">

        <div className="settings-header">
          <h1>Institute Settings</h1>
          <p>
            Manage institute information and platform configuration.
          </p>
        </div>

        <div className="settings-card">

          <h3>Institute Information</h3>

          <div className="form-grid">

            <div className="form-group">
              <label>Institute Name</label>
              <input
                type="text"
                defaultValue="LMS Academy"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                defaultValue="admin@lmsacademy.com"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                defaultValue="+91 9876543210"
              />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input
                type="text"
                defaultValue="www.lmsacademy.com"
              />
            </div>

          </div>

        </div>

        <div className="settings-card">

          <h3>Address Details</h3>

          <div className="form-group">
            <label>Institute Address</label>

            <textarea
              rows="4"
              defaultValue="Aurangabad, Maharashtra, India"
            />
          </div>

        </div>

        <div className="settings-card">

          <h3>System Preferences</h3>

          <div className="checkbox-group">

            <label>
              <input type="checkbox" defaultChecked />
              Enable Email Notifications
            </label>

            <label>
              <input type="checkbox" defaultChecked />
              Enable SMS Notifications
            </label>

            <label>
              <input type="checkbox" />
              Maintenance Mode
            </label>

          </div>

        </div>

        <button className="save-btn">
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default InstituteSettings;