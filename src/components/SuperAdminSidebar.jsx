import { NavLink } from "react-router-dom";
import "./SuperAdminSidebar.css";

function SuperAdminSidebar() {
  return (
    <div className="superadmin-sidebar">

      <div className="sidebar-logo">
        <h2>Super Admin</h2>
      </div>

      <ul>

        <li>
          <NavLink to="/superadmin/dashboard">
            Dashboard
          </NavLink>
        </li>

        <li>
  <NavLink to="/superadmin/system-analytics">
    System Analytics
  </NavLink>
</li>

      <li>
  <NavLink to="/superadmin/branch-management">
    Branch Management
  </NavLink>
</li>  

       <li>
  <NavLink to="/superadmin/backup">
    System Backup
  </NavLink>
</li>
        <li>
  <NavLink to="/superadmin/audit-logs">
    Audit Logs
  </NavLink>
</li>

        <li>
  <NavLink to="/superadmin/role-permissions">
    Role Permissions
  </NavLink>
</li>

        <li>
  <NavLink to="/superadmin/institute-settings">
    Institute Settings
  </NavLink>
</li>

        <li>
  <NavLink to="/superadmin/profile">
    Profile
  </NavLink>
</li>
      </ul>

    </div>
  );
}

export default SuperAdminSidebar;