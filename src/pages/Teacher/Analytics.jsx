import "./Analytics.css";

function Analytics() {
  const analyticsData = [
    {
      title: "Total Students",
      value: "1,250",
      growth: "+12%",
    },
    {
      title: "Course Completion",
      value: "87%",
      growth: "+5%",
    },
    {
      title: "Average Attendance",
      value: "91%",
      growth: "+3%",
    },
    {
      title: "Assignments Submitted",
      value: "4,580",
      growth: "+18%",
    },
  ];

  return (
    <div className="analytics-page">

      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <p>
          Track student performance, attendance, and course progress.
        </p>
      </div>

      <div className="analytics-cards">

        {analyticsData.map((item, index) => (
          <div className="analytics-card" key={index}>

            <h4>{item.title}</h4>

            <h2>{item.value}</h2>

            <span>{item.growth}</span>

          </div>
        ))}

      </div>

      <div className="analytics-grid">

        <div className="chart-card">
          <h3>Student Enrollment Growth</h3>

          <div className="chart-placeholder">
            Enrollment Chart
          </div>
        </div>

        <div className="chart-card">
          <h3>Attendance Trend</h3>

          <div className="chart-placeholder">
            Attendance Chart
          </div>
        </div>

      </div>

      <div className="analytics-grid">

        <div className="chart-card">
          <h3>Assignment Performance</h3>

          <div className="chart-placeholder">
            Assignment Analytics
          </div>
        </div>

        <div className="chart-card">
          <h3>Quiz Results</h3>

          <div className="chart-placeholder">
            Quiz Performance
          </div>
        </div>

      </div>

    </div>
  );
}

export default Analytics;