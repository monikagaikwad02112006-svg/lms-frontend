import "./Dashboard.css";

import Sidebar from "../../components/Sidebar";

function Dashboard() {
  const stats = [
    { title: "Attendance", value: "92%" },
    { title: "Assignments", value: "8" },
    { title: "Courses", value: "12" },
    { title: "Certificates", value: "5" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Welcome Back, Monika </h1>
            <p>Track your learning progress</p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stats-card" key={index}>
              <h3>{item.title}</h3>
              <h2>{item.value}</h2>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Upcoming Assignments</h3>
            <ul>
              <li>React Project - 25 July</li>
              <li>Database Assignment - 27 July</li>
              <li>Java Quiz - 29 July</li>
            </ul>
          </div>

          <div className="dashboard-card">
            <h3>Announcements</h3>
            <ul>
              <li>Semester Exam Schedule Released</li>
              <li>New Notes Uploaded</li>
              <li>Attendance Updated</li>
            </ul>
          </div>
        </div>

        <div className="dashboard-card recent">
          <h3>Recent Activity</h3>

          <div className="activity-item">
            Downloaded React Notes
          </div>

          <div className="activity-item">
            Submitted Assignment #4
          </div>

          <div className="activity-item">
            Watched Java Lecture
          </div>
        </div>
        
  


        
      </div>
    </div>
  );
}

export default Dashboard;