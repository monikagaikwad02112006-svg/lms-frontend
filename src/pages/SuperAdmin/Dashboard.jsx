import SuperAdminSidebar from "../../components/SuperAdminSidebar";
import "./Dashboard.css";

function Dashboard() {
  const stats = [
    {
      title: "Total Admins",
      value: "12",
    },
    {
      title: "Total Teachers",
      value: "185",
    },
    {
      title: "Total Students",
      value: "8,450",
    },
    {
      title: "Active Courses",
      value: "320",
    },
  ];

  return (
    <div className="superadmin-layout">

      <SuperAdminSidebar />

      <div className="superadmin-dashboard">

        <div className="dashboard-header">

          <h1>Super Admin Dashboard</h1>

          <p>
            Monitor and control the entire LMS ecosystem.
          </p>

        </div>

        <div className="dashboard-stats">

          {stats.map((item, index) => (
            <div
              className="dashboard-card"
              key={index}
            >
              <h3>{item.title}</h3>

              <h2>{item.value}</h2>
            </div>
          ))}

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-box">

            <h3>Platform Overview</h3>

            <p>✔ Total Active Users: 8,647</p>

            <p>✔ Courses Running: 320</p>

            <p>✔ Live Classes Today: 48</p>

            <p>✔ System Uptime: 99.9%</p>

          </div>

          <div className="dashboard-box">

            <h3>Recent Activities</h3>

            <p>✔ New Admin Created</p>

            <p>✔ 5 Teachers Approved</p>

            <p>✔ New Batch Added</p>

            <p>✔ Analytics Report Generated</p>

          </div>

        </div>

        <div className="dashboard-box">

          <h3>System Status</h3>

          <p> Server Status: Online</p>

          <p> Database Status: Connected</p>

          <p>Storage Usage: 68%</p>

          <p>Security Status: Protected</p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;