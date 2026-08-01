import SuperAdminSidebar from "../../components/SuperAdminSidebar";
import "./SystemAnalytics.css";

function SystemAnalytics() {
  const analyticsData = [
    {
      title: "Total Users",
      value: "8,450",
      growth: "+12%",
    },
    {
      title: "Active Courses",
      value: "320",
      growth: "+8%",
    },
    {
      title: "Live Classes",
      value: "48",
      growth: "+15%",
    },
    {
      title: "Completion Rate",
      value: "92%",
      growth: "+5%",
    },
  ];

  return (
    <div className="analytics-layout">

      <SuperAdminSidebar />

      <div className="analytics-page">

        <div className="analytics-header">
          <h1>System Analytics</h1>
          <p>
            Track platform performance and user engagement.
          </p>
        </div>

        <div className="analytics-cards">

          {analyticsData.map((item, index) => (
            <div
              className="analytics-card"
              key={index}
            >
              <h4>{item.title}</h4>

              <h2>{item.value}</h2>

              <span>{item.growth} This Month</span>
            </div>
          ))}

        </div>

        <div className="analytics-grid">

          <div className="chart-card">

            <h3>User Growth</h3>

            <div className="chart-placeholder">
              Monthly User Growth Chart
            </div>

          </div>

          <div className="chart-card">

            <h3>Course Activity</h3>

            <div className="chart-placeholder">
              Course Engagement Chart
            </div>

          </div>

        </div>

        <div className="analytics-table-card">

          <h3>Performance Summary</h3>

          <table>

            <thead>
              <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Total Students</td>
                <td>8,450</td>
                <td>7,980</td>
                <td className="positive">↑ Growth</td>
              </tr>

              <tr>
                <td>Total Teachers</td>
                <td>185</td>
                <td>170</td>
                <td className="positive">↑ Growth</td>
              </tr>

              <tr>
                <td>Course Completion</td>
                <td>92%</td>
                <td>88%</td>
                <td className="positive">↑ Improved</td>
              </tr>

              <tr>
                <td>System Downtime</td>
                <td>0.2%</td>
                <td>0.8%</td>
                <td className="positive">↑ Better</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default SystemAnalytics;