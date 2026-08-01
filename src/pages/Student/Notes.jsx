import Sidebar from "../../components/Sidebar";
import "./Notes.css";

function Notes() {
  const notes = [
    {
      subject: "React JS",
      title: "React Fundamentals",
      uploaded: "20 July 2026",
    },
    {
      subject: "Java",
      title: "OOP Concepts",
      uploaded: "18 July 2026",
    },
    {
      subject: "Database",
      title: "Normalization Notes",
      uploaded: "15 July 2026",
    },
    {
      subject: "Web Development",
      title: "HTML & CSS Guide",
      uploaded: "12 July 2026",
    },
  ];

  return (
    <div className="notes-layout">
      <Sidebar />

      <div className="notes-container">
        <div className="notes-header">
          <h1>Study Notes</h1>
          <p>
            Access lecture notes, study material and resources.
          </p>
        </div>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <div className="note-card" key={index}>
              <div className="note-icon">📘</div>

              <span className="subject">
                {note.subject}
              </span>

              <h3>{note.title}</h3>

              <p>
                Uploaded on {note.uploaded}
              </p>

              <button className="download-btn">
                Download Notes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;