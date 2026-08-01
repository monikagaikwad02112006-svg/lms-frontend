import "./VideoManagement.css";

const videos = [
  {
    id: 1,
    title: "React Hooks Tutorial",
    subject: "Web Development",
    duration: "45 min",
    status: "Published",
  },
  {
    id: 2,
    title: "DBMS Introduction",
    subject: "DBMS",
    duration: "30 min",
    status: "Draft",
  },
  {
    id: 3,
    title: "Java OOP Concepts",
    subject: "Java",
    duration: "55 min",
    status: "Published",
  },
];

function VideoManagement() {
  return (
    <div className="video-management">

      <div className="video-header">
        <div>
          <h1>Video Management</h1>
          <p>Upload and manage recorded lectures.</p>
        </div>

        <button className="upload-btn">
          + Upload Video
        </button>
      </div>

      <div className="video-table-card">

        <table>

          <thead>
            <tr>
              <th>Video Title</th>
              <th>Subject</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {videos.map((video) => (
              <tr key={video.id}>

                <td>{video.title}</td>
                <td>{video.subject}</td>
                <td>{video.duration}</td>

                <td>
                  <span
                    className={`status-badge ${video.status.toLowerCase()}`}
                  >
                    {video.status}
                  </span>
                </td>

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

export default VideoManagement;