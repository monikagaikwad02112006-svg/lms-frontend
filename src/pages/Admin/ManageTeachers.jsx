import AdminSidebar from "../../components/AdminSidebar";
import "./ManageTeachers.css";

const teachers = [
  {
    id: 1,
    name: "Prof. Sharma",
    subject: "React JS",
    email: "sharma@gmail.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Prof. Verma",
    subject: "Java Programming",
    email: "verma@gmail.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Prof. Patil",
    subject: "Data Science",
    email: "patil@gmail.com",
    status: "Inactive",
  },
];

function ManageTeachers() {
  return (
    <div className="teachers-layout">

      <AdminSidebar />

      <div className="teachers-page">

        <div className="teachers-header">

          <div>
            <h1>Manage Teachers</h1>
            <p>View and manage all faculty members.</p>
          </div>

          <button className="add-teacher-btn">
            + Add Teacher
          </button>

        </div>

        <div className="teachers-table-card">

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {teachers.map((teacher) => (
                <tr key={teacher.id}>

                  <td>{teacher.name}</td>

                  <td>{teacher.subject}</td>

                  <td>{teacher.email}</td>

                  <td>
                    <span
                      className={`teacher-status ${teacher.status.toLowerCase()}`}
                    >
                      {teacher.status}
                    </span>
                  </td>

                  <td>
                    <div className="teacher-actions">

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

export default ManageTeachers;