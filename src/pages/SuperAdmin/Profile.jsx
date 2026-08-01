import SuperAdminSidebar from "../../components/SuperAdminSidebar";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-layout">

      <SuperAdminSidebar />

      <div className="profile-page">

        <div className="profile-header">
          <h1>Super Admin Profile</h1>
          <p>Manage your account information and preferences.</p>
        </div>

        <div className="profile-card">

          <div className="profile-avatar">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
            />
          </div>

          <div className="profile-form">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                defaultValue="Super Admin"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                defaultValue="superadmin@lms.com"
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
              <label>Role</label>
              <input
                type="text"
                defaultValue="Super Administrator"
                disabled
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
              />
            </div>

          </div>

          <button className="update-btn">
            Update Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;