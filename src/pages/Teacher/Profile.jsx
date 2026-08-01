import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            M
          </div>

          <div>
            <h1>Monika Gaikwad</h1>
            <p>Assistant Professor - Computer Science</p>
          </div>

        </div>

        <div className="profile-info">

          <div className="info-box">
            <h4>Email</h4>
            <p>monika@lms.com</p>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h4>Department</h4>
            <p>Computer Science</p>
          </div>

          <div className="info-box">
            <h4>Experience</h4>
            <p>5 Years</p>
          </div>

          <div className="info-box">
            <h4>Total Students</h4>
            <p>250</p>
          </div>

          <div className="info-box">
            <h4>Total Courses</h4>
            <p>6</p>
          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;