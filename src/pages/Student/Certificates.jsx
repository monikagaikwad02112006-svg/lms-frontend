
import Sidebar from "../../components/Sidebar";

import "./Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "React Development",
      issuer: "LMS Academy",
      date: "15 July 2026",
    },
    {
      title: "Java Programming",
      issuer: "LMS Academy",
      date: "02 June 2026",
    },
    {
      title: "Database Management",
      issuer: "LMS Academy",
      date: "20 May 2026",
    },
  ];

  return (
    <div className="certificates-layout">
      <Sidebar />

      <div className="certificates-container">
        <div className="certificates-header">
          <h1>My Certificates</h1>
          <p>View and manage your earned certifications.</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-icon">🏆</div>

              <h3>{certificate.title}</h3>

              <p className="issuer">
                Issued by {certificate.issuer}
              </p>

              <p className="date">
                Earned on {certificate.date}
              </p>

              <button className="download-btn">
                Download Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;