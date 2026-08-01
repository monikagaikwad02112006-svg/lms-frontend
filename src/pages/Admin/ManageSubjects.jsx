import AdminSidebar from "../../components/AdminSidebar";
import "./ManageSubjects.css";

const subjects = [
  {
    id: 1,
    name: "React JS",
    teacher: "Prof. Sharma",
    students: 120,
    status: "Active",
  },
  {
    id: 2,
    name: "Java Programming",
    teacher: "Prof. Verma",
    students: 95,
    status: "Active",
  },
  {
    id: 3,
    name: "Data Science",
    teacher: "Prof. Patil",
    students: 80,
    status: "Inactive",
  },
];

function ManageSubjects() {
  return (
    <div className="subjects-layout">

      <AdminSidebar />

      <div className="subjects-page">

        <div className="subjects-header">

          <div>
            <h1>Manage Subjects</h1>
            <p>Create, edit and manage all subjects.</p>
          </div>

          <button className="add-subject-btn">
            + Add Subject
          </button>

        </div>

        <div className="subjects-table-card">

          <table>

            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Teacher</th>
                <th>Students</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {subjects.map((subject) => (
                <tr key={subject.id}>

                  <td>{subject.name}</td>

                  <td>{subject.teacher}</td>

                  <td>{subject.students}</td>

                  <td>
                    <span
                      className={`subject-status ${subject.status.toLowerCase()}`}
                    >
                      {subject.status}
                    </span>
                  </td>

                  <td>
                    <div className="subject-actions">

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

export default ManageSubjects;