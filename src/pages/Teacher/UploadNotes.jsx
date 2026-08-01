import "./UploadNotes.css";

const notes = [
  {
    id: 1,
    title: "React Hooks Notes",
    subject: "Web Development",
    uploadDate: "25 Jul 2025",
  },
  {
    id: 2,
    title: "DBMS Normalization",
    subject: "DBMS",
    uploadDate: "24 Jul 2025",
  },
  {
    id: 3,
    title: "Java OOP Concepts",
    subject: "Java",
    uploadDate: "22 Jul 2025",
  },
];

function UploadNotes() {
  return (
    <div className="upload-notes-page">

      <div className="notes-header">
        <div>
          <h1>Upload Notes</h1>
          <p>Manage and upload study materials for students.</p>
        </div>

        <button className="upload-btn">
          + Upload Notes
        </button>
      </div>

      <div className="notes-table-card">

        <table>

          <thead>
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Upload Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {notes.map((note) => (
              <tr key={note.id}>

                <td>{note.title}</td>
                <td>{note.subject}</td>
                <td>{note.uploadDate}</td>

                <td>
                  <div className="action-buttons">

                    <button className="view-btn">
                      View
                    </button>

                    <button className="edit-btn">
                      Edit
                    </button>

                    <button className="delete-btn">
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UploadNotes;