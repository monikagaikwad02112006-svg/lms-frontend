import { NavLink } from "react-router-dom";
import "./TeacherSidebar.css";

function TeacherSidebar() {
  return (
    <div className="teacher-sidebar">

      <h2>Teacher LMS</h2>

      <ul>

        <li>
          <NavLink to="/teacher/dashboard">
            Dashboard
          </NavLink>
        </li>

        

        <li>
          <NavLink to="/teacher/assignment-management">
            Assignment Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/teacher/analytics">
            Analytics
          </NavLink>
        </li>

        


        <li>
  <NavLink to="/teacher/announcements">
    Announcements
  </NavLink>
</li>

        <li>
          <NavLink to="/teacher/studentattendance">
            StudentAttendance
          </NavLink>
        </li>

        <li>
          <NavLink to="/teacher/quizmanagement">
            Quiz Management
          </NavLink>
        </li>

        <li>
          <NavLink to="/teacher/todays-classes">
          
            Today's Classes
          </NavLink>
        </li>
        <li>
  <NavLink to="/teacher/upload-notes">
    Upload Notes
  </NavLink>
</li>
<li>
  <NavLink to="/teacher/videos">
    Video Management
  </NavLink>
</li>

        
        
        <li>
  <NavLink to="/teacher/clock">
    Clock
  </NavLink>
</li>
<li>
          <NavLink to="/teacher/profile">
            Profile
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default TeacherSidebar;