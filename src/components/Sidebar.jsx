import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2> LMS Portal</h2>

      <nav>
        <ul>

          <li>
            <NavLink to="/student/dashboard">
               Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/attendance">
               Attendance
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/assignments">
               Assignments
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/calendar">
               Calendar
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/doubts">
               Doubts
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/certificates">
               Certificates
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/forum">
               Forum
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/notes">
               Notes
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/notes-library">
               Notes Library
            </NavLink>
          </li>
          <li>
  <NavLink to="/student/quizzes">
     Quizzes
  </NavLink>
</li>
<li>
  <NavLink to="/student/recorded-videos">
     Recorded Videos
  </NavLink>
</li>
<li>
  <NavLink to="/student/subjects">
    Subjects
  </NavLink>
</li>
<li>
  <NavLink to="/student/teachers">
     Teacher Directory
  </NavLink>
</li>
<li>
  <NavLink to="/student/videos">
    Videos
  </NavLink>
</li>
<li>
  <NavLink to="/student/profile">
    Profile
  </NavLink>
</li>

        </ul>
      </nav>

      <div className="sidebar-footer">
        Student Learning Portal
      </div>

    </div>
  );
}

export default Sidebar;