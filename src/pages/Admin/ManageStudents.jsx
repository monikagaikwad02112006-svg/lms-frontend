import AdminSidebar from "../../components/AdminSidebar";
import "./ManageStudents.css";

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    course: "Full Stack Development",
    email: "aarav@gmail.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Patil",
    course: "Java Programming",
    email: "priya@gmail.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Rahul Verma",
    course: "Data Science",
    email: "rahul@gmail.com",
    status: "Inactive",
  },
];

function ManageStudents() {
  return (
    <div className="student-layout">

      <AdminSidebar />

      <div className="student-page">

        <div className="student-header">

          <div>
            <h1>Manage Students</h1>
            <p>View and manage all enrolled students.</p>
          </div>

          <button className="add-student-btn">
            + Add Student
          </button>

        </div>

        <div className="student-table-card">

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {students.map((student) => (
                <tr key={student.id}>

                  <td>{student.name}</td>

                  <td>{student.course}</td>

                  <td>{student.email}</td>

                  <td>
                    <span
                      className={`student-status ${student.status.toLowerCase()}`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td>
                    <div className="student-actions">

                      <button className="view-btn">
                        View
                      </button>

                      <button className="edit-btn">
                        Edit
                      </button>

                      <button className="delete-btn">
                        Delete
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

export default ManageStudents;