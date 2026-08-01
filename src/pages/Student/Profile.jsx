import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-banner">
        <div className="profile-info">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="student"
            className="profile-avatar"
          />

          <div>
            <h1>Monika Gaikwad</h1>
            <p>Computer Science Student</p>
            <span className="student-id">
              Student ID: LMS2025001
            </span>
          </div>
        </div>

        <button className="edit-btn">
          Edit Profile
        </button>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <h3>Personal Information</h3>

          <div className="info-row">
            <span>Email</span>
            <strong>monika@gmail.com</strong>
          </div>

          <div className="info-row">
            <span>Phone</span>
            <strong>+91 9876543210</strong>
          </div>

          <div className="info-row">
            <span>Location</span>
            <strong>Mumbai, India</strong>
          </div>
        </div>

        <div className="profile-card">
          <h3>Academic Details</h3>

          <div className="info-row">
            <span>Course</span>
            <strong>B.Tech CSE</strong>
          </div>

          <div className="info-row">
            <span>Semester</span>
            <strong>6th</strong>
          </div>

          <div className="info-row">
            <span>CGPA</span>
            <strong>8.9</strong>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <h2>92%</h2>
          <p>Attendance</p>
        </div>

        <div className="stat-card">
          <h2>28</h2>
          <p>Assignments</p>
        </div>

        <div className="stat-card">
          <h2>12</h2>
          <p>Certificates</p>
        </div>

        <div className="stat-card">
          <h2>85%</h2>
          <p>Performance</p>
        </div>
      </div>

      <div className="profile-card">
        <h3>Skills</h3>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>Java</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>

      <div className="profile-card">
        <h3>Recent Activity</h3>

        <div className="activity">
          Downloaded React Notes
        </div>

        <div className="activity">
          Submitted Assignment #5
        </div>

        <div className="activity">
          Completed Java Quiz
        </div>
      </div>
    </div>
  );
}

export default Profile;