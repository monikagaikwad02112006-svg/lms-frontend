import { Link } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  return (
    <div className="reset-container">

      <div className="reset-card">

        <h1>Reset Password</h1>

        <p>
          Create a new password for your account.
        </p>

        <form>

          <div className="form-group">
            <label>New Password</label>

            <input
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            className="reset-btn"
          >
            Reset Password
          </button>

        </form>

        <div className="back-login">

          <Link to="/login">
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ResetPassword;