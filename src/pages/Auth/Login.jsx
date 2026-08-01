import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary Role-Based Login

    if (role === "student") {
      navigate("/student/dashboard");
    } else if (role === "teacher") {
      navigate("/teacher/dashboard");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "superadmin") {
      navigate("/superadmin/dashboard");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">

          <h1>Welcome Back</h1>

          <p>
            Login to access your LMS account
          </p>

        </div>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          <div className="form-group">

            <label>Select Role</label>

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="role-select"
            >
              <option value="student">
                Student
              </option>

              <option value="teacher">
                Teacher
              </option>

              <option value="admin">
                Admin
              </option>

              <option value="superadmin">
                Super Admin
              </option>

            </select>

          </div>

          <div className="login-options">

            <label className="remember-me">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="forgot-link"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="signup-link">

          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;