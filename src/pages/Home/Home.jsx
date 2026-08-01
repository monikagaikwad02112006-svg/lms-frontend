import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      <header className="home-navbar">

        <div className="logo">
          <h2>LMS Portal</h2>
        </div>

        <div className="nav-buttons">

          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="signup-btn">
              Sign Up
            </button>
          </Link>

        </div>

      </header>

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            Smart Learning Platform
          </span>

          <h1>
            Empowering Education Through
            <span> Digital Learning</span>
          </h1>

          <p>
            A complete Learning Management System for Students,
            Teachers, Admins, and Super Admins. Manage courses,
            assignments, attendance, quizzes, analytics, and
            learning resources from one powerful platform.
          </p>

          <div className="hero-buttons">

            <Link to="/login">
              <button className="primary-btn">
                Get Started
              </button>
            </Link>

            <Link to="/signup">
              <button className="secondary-btn">
                Create Account
              </button>
            </Link>

          </div>

        </div>

      </section>

      <section className="features-section">

        <div className="section-title">

          <h2>Platform Features</h2>

          <p>
            Everything you need to manage learning efficiently.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">

            <h3>Student Portal</h3>

            <p>
              Access notes, assignments, quizzes,
              attendance, and recorded lectures.
            </p>

          </div>

          <div className="feature-card">

            <h3>Teacher Portal</h3>

            <p>
              Manage classes, assignments,
              attendance, videos, and analytics.
            </p>

          </div>

          <div className="feature-card">

            <h3>Admin Panel</h3>

            <p>
              Manage students, teachers,
              batches, reports, and content approvals.
            </p>

          </div>

          <div className="feature-card">

            <h3>Super Admin</h3>

            <p>
              Control branches, permissions,
              system analytics, and platform settings.
            </p>

          </div>

        </div>

      </section>

      <section className="stats-section">

        <div className="stat-card">

          <h2>10K+</h2>

          <p>Students</p>

        </div>

        <div className="stat-card">

          <h2>500+</h2>

          <p>Teachers</p>

        </div>

        <div className="stat-card">

          <h2>300+</h2>

          <p>Courses</p>

        </div>

        <div className="stat-card">

          <h2>99.9%</h2>

          <p>Uptime</p>

        </div>

      </section>

      <section className="cta-section">

        <h2>
          Start Your Learning Journey Today
        </h2>

        <p>
          Join our digital learning platform and
          experience seamless education management.
        </p>

        <Link to="/login">
          <button className="cta-btn">
            Login Now
          </button>
        </Link>

      </section>

      <footer className="home-footer">

        <p>
          © 2026 LMS Portal. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;