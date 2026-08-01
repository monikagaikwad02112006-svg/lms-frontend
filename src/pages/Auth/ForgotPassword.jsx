import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgot-container">

      <div className="forgot-card">

        <h1>Forgot Password</h1>

        <p>
          Enter your registered email address and we'll send you a password reset link.
        </p>

        <form>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="reset-btn"
          >
            Send Reset Link
          </button>

        </form>

        <div className="forgot-links">

          <Link to="/login">
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;