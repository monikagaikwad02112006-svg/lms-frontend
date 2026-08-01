import AdminSidebar from "../../components/AdminSidebar";
import "./AdminDashboard.css";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,250",
    },
    {
      title: "Total Teachers",
      value: "85",
    },
    {
      title: "Courses",
      value: "120",
    },
    {
      title: "Pending Approvals",
      value: "18",
    },
  ];

  return (
    <div className="admin-dashboard-layout">

      <AdminSidebar />

      <div className="admin-dashboard">

        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>
            Welcome back! Monitor and manage the LMS platform.
          </p>
        </div>

        <div className="admin-stats">

          {stats.map((item, index) => (
            <div className="admin-card" key={index}>

              <h3>{item.title}</h3>

              <h2>{item.value}</h2>

            </div>
          ))}

        </div>

        <div className="admin-sections">

          <div className="admin-box">

            <h3>Recent Activities</h3>

            <p>✔ New Teacher Registered</p>

            <p>✔ Course Added: React Development</p>

            <p>✔ 5 Content Approvals Pending</p>

            <p>✔ Student Enrollment Updated</p>

          </div>

          <div className="admin-box">

            <h3>System Overview</h3>

            <p>Total Active Users: 1335</p>

            <p>Courses Running: 120</p>

            <p>Storage Used: 68%</p>

            <p>Server Status: Online</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;