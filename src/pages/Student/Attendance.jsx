import "./Attendance.css";

const attendanceData = [
  {
    subject: "Web Development",
    attended: 28,
    total: 30,
    percentage: "93%",
  },
  {
    subject: "Database Management",
    attended: 25,
    total: 30,
    percentage: "83%",
  },
  {
    subject: "Operating Systems",
    attended: 27,
    total: 30,
    percentage: "90%",
  },
  {
    subject: "Computer Networks",
    attended: 29,
    total: 30,
    percentage: "97%",
  },
];

export default function Attendance() {
  return (
    <div className="attendance-page">
      <div className="attendance-header">
        <div>
          <h1>Attendance</h1>
          <p>Track your attendance performance.</p>
        </div>

        <button className="download-btn">
          Download Report
        </button>
      </div>

      {/* Summary Cards */}

      <div className="attendance-stats">
        <div className="attendance-stat-card">
          <h2>91%</h2>
          <span>Overall Attendance</span>
        </div>

        <div className="attendance-stat-card">
          <h2>109</h2>
          <span>Classes Attended</span>
        </div>

        <div className="attendance-stat-card">
          <h2>120</h2>
          <span>Total Classes</span>
        </div>

        <div className="attendance-stat-card">
          <h2>11</h2>
          <span>Classes Missed</span>
        </div>
      </div>

      {/* Subject Attendance */}

      <div className="attendance-table-card">
        <div className="table-header">
          <h2>Subject-wise Attendance</h2>
        </div>

        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Attended</th>
              <th>Total</th>
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>
            {attendanceData.map((item, index) => (
              <tr key={index}>
                <td>{item.subject}</td>
                <td>{item.attended}</td>
                <td>{item.total}</td>
                <td>
                  <span className="attendance-badge">
                    {item.percentage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Monthly Progress */}

      <div className="progress-card">
        <h2>Monthly Attendance Progress</h2>

        <div className="progress-item">
          <span>January</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "88%" }}
            ></div>
          </div>
        </div>

        <div className="progress-item">
          <span>February</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "92%" }}
            ></div>
          </div>
        </div>

        <div className="progress-item">
          <span>March</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "95%" }}
            ></div>
          </div>
        </div>

        <div className="progress-item">
          <span>April</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}