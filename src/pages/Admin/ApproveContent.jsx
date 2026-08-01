import "./ApproveContent.css";

const contents = [
  {
    id: 1,
    title: "React Hooks Notes",
    type: "Notes",
    uploadedBy: "Prof. Sharma",
    date: "25 Jul 2025",
    status: "Pending",
  },
  {
    id: 2,
    title: "DBMS Recorded Lecture",
    type: "Video",
    uploadedBy: "Prof. Patil",
    date: "24 Jul 2025",
    status: "Pending",
  },
  {
    id: 3,
    title: "Java Quiz Set",
    type: "Quiz",
    uploadedBy: "Prof. Mehta",
    date: "23 Jul 2025",
    status: "Pending",
  },
];

function ApproveContent() {
  return (
    <div className="approve-content">

      <div className="approve-header">
        <h1>Content Approval</h1>
        <p>Review and approve uploaded educational content.</p>
      </div>

      <div className="content-table-card">

        <table>

          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Uploaded By</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {contents.map((item) => (
              <tr key={item.id}>

                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.uploadedBy}</td>
                <td>{item.date}</td>

                <td>
                  <span className="pending-badge">
                    {item.status}
                  </span>
                </td>

                <td>

                  <div className="action-buttons">

                    <button className="view-btn">
                      View
                    </button>

                    <button className="approve-btn">
                      Approve
                    </button>

                    <button className="reject-btn">
                      Reject
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

export default ApproveContent;