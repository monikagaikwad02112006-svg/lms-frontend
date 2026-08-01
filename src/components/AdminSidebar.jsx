import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";
import ManageStudents from "../pages/Admin/ManageStudents";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">

      <h2>Admin LMS</h2>

      <ul>

        <li>
  <NavLink to="/admin/dashboard">
    Dashboard
  </NavLink>
</li>

        

        <li>
          <NavLink to="/admin/approve-content">
            Approve Content
          </NavLink>
        </li>

        <li>
  <NavLink to="/admin/manage-batches">
    Manage Batches
  </NavLink>
</li>

        <li>
  <NavLink to="/admin/manage-students">
    Manage Students
  </NavLink>
</li>
        
        <li>
  <NavLink to="/admin/manage-subjects">
    Manage Subjects
  </NavLink>
</li>

        <li>
  <NavLink to="/admin/manage-teachers">
    Manage Teachers
  </NavLink>
</li>

        <li>
  <NavLink to="/admin/notifications">
    Notifications
  </NavLink>
</li>
<li>
  <NavLink to="/admin/reports">
    Reports
  </NavLink>
</li>
<li>
  <NavLink to="/admin/settings">
    Settings
  </NavLink>
</li>
        

      </ul>

    </div>
  );
}

export default AdminSidebar;