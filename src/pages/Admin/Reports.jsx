import AdminSidebar from "../../components/AdminSidebar";
import "./Reports.css";

const reports = [
  {
    id: 1,
    title: "Student Performance Report",
    category: "Students",
    date: "25 July 2025",
    status: "Generated",
  },
  {
    id: 2,
    title: "Teacher Activity Report",
    category: "Teachers",
    date: "24 July 2025",
    status: "Generated",
  },
  {
    id: 3,
    title: "Course Completion Report",
    category: "Courses",
    date: "22 July 2025",
    status: "Pending",
  },
  {
    id: 4,
    title: "Attendance Summary Report",
    category: "Attendance",
    date: "20 July 2025",
    status: "Generated",
  },
];

function Reports() {
  return (
    <div className="reports-layout">

      <AdminSidebar />

      <div className="reports-page">

        <div className="reports-header">

          <div>
            <h1>Reports Management</h1>
            <p>View, generate and download LMS reports.</p>
          </div>

          <button className="generate-btn">
            + Generate Report
          </button>

        </div>

        <div className="reports-table-card">

          <table>

            <thead>
              <tr>
                <th>Report Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {reports.map((report) => (
                <tr key={report.id}>

                  <td>{report.title}</td>

                  <td>{report.category}</td>

                  <td>{report.date}</td>

                  <td>
                    <span
                      className={`report-status ${report.status.toLowerCase()}`}
                    >
                      {report.status}
                    </span>
                  </td>

                  <td>

                    <div className="report-actions">

                      <button className="view-btn">
                        View
                      </button>

                      <button className="download-btn">
                        Download
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Reports;