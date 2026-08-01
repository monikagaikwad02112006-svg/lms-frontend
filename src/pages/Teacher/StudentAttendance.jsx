import "./StudentAttendance.css";

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    rollNo: "ST101",
    attendance: "92%",
    status: "Present",
  },
  {
    id: 2,
    name: "Priya Patel",
    rollNo: "ST102",
    attendance: "88%",
    status: "Present",
  },
  {
    id: 3,
    name: "Rahul Verma",
    rollNo: "ST103",
    attendance: "65%",
    status: "Absent",
  },
  {
    id: 4,
    name: "Sneha Joshi",
    rollNo: "ST104",
    attendance: "95%",
    status: "Present",
  },
];

function StudentAttendance() {
  return (
    <div className="attendance-page">

      <div className="attendance-header">
        <div>
          <h1>Student Attendance</h1>
          <p>Track and manage student attendance records</p>
        </div>

        <button className="mark-btn">
          Mark Attendance
        </button>
      </div>

      <div className="attendance-toolbar">
        <input
          type="text"
          placeholder="Search Student..."
          className="search-input"
        />

        <select className="filter-select">
          <option>All Students</option>
          <option>Present</option>
          <option>Absent</option>
        </select>
      </div>

      <div className="attendance-table">

        <table>

          <thead>
            <tr>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Attendance %</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (
              <tr key={student.id}>

                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.attendance}</td>

                <td>
                  <span
                    className={`status ${student.status.toLowerCase()}`}
                  >
                    {student.status}
                  </span>
                </td>

                <td>
                  <button className="view-btn">
                    View
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StudentAttendance;