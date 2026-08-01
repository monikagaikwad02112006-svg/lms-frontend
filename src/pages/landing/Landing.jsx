import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">

      <div className="hero-section">

        <h1>Learning Management System</h1>

        <p>
          Learn, Grow and Manage Education Seamlessly.
        </p>

        <div className="landing-buttons">

          {/* Auth */}
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/forgot-password">
            <button>Forgot Password</button>
          </Link>

          <Link to="/reset-password">
            <button>Reset Password</button>
          </Link>

        </div>

        <div className="portal-buttons">

          {/* Student */}
          <Link to="/student/dashboard">
            <button>Student Portal</button>
          </Link>

          {/* Teacher */}
          <Link to="/teacher/dashboard">
            <button>Teacher Portal</button>
          </Link>

          {/* Admin */}
          <Link to="/admin/dashboard">
            <button>Admin Portal</button>
          </Link>

          {/* Super Admin */}
          <Link to="/superadmin/dashboard">
            <button>Super Admin Portal</button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Landing;