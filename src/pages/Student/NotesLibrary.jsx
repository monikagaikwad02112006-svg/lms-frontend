import Sidebar from "../../components/Sidebar";
import "./NotesLibrary.css";

function NotesLibrary() {
  const notes = [
    {
      subject: "React JS",
      title: "React Complete Notes",
      teacher: "Prof. Sharma",
      files: 12,
    },
    {
      subject: "Java Programming",
      title: "Core Java Handbook",
      teacher: "Prof. Verma",
      files: 8,
    },
    {
      subject: "Database Management",
      title: "DBMS Study Material",
      teacher: "Prof. Patil",
      files: 10,
    },
    {
      subject: "Web Development",
      title: "HTML, CSS & JavaScript",
      teacher: "Prof. Singh",
      files: 15,
    },
    {
      subject: "Python",
      title: "Python Programming Guide",
      teacher: "Prof. Mehta",
      files: 11,
    },
    {
      subject: "Data Structures",
      title: "DSA Notes",
      teacher: "Prof. Kulkarni",
      files: 9,
    },
  ];

  return (
    <div className="library-layout">
      <Sidebar />

      <div className="library-container">
        <div className="library-header">
          <h1>📚 Notes Library</h1>
          <p>
            Access lecture notes, study materials, reference books and resources.
          </p>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search notes..."
            className="search-input"
          />
        </div>

        <div className="library-grid">
          {notes.map((note, index) => (
            <div className="library-card" key={index}>
              <div className="library-icon">📘</div>

              <span className="subject-tag">
                {note.subject}
              </span>

              <h3>{note.title}</h3>

              <p className="teacher">
                Instructor: {note.teacher}
              </p>

              <p className="files">
                {note.files} Files Available
              </p>

              <button className="view-btn">
                View Notes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotesLibrary;