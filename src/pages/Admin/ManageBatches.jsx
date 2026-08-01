import AdminSidebar from "../../components/AdminSidebar";
import "./ManageBatches.css";

const batches = [
  {
    id: 1,
    batchName: "Full Stack Development",
    students: 120,
    trainer: "Prof. Sharma",
    status: "Active",
  },
  {
    id: 2,
    batchName: "Java Programming",
    students: 85,
    trainer: "Prof. Verma",
    status: "Active",
  },
  {
    id: 3,
    batchName: "Data Science",
    students: 60,
    trainer: "Prof. Patil",
    status: "Upcoming",
  },
  {
    id: 4,
    batchName: "UI/UX Design",
    students: 45,
    trainer: "Prof. Joshi",
    status: "Completed",
  },
];

function ManageBatches() {
  return (
    <div className="batch-layout">

      <AdminSidebar />

      <div className="batch-page">

        <div className="batch-header">

          <div>
            <h1>Manage Batches</h1>
            <p>Create, monitor and manage student batches.</p>
          </div>

          <button className="create-batch-btn">
            + Create Batch
          </button>

        </div>

        <div className="batch-table-card">

          <table>

            <thead>
              <tr>
                <th>Batch Name</th>
                <th>Students</th>
                <th>Trainer</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {batches.map((batch) => (
                <tr key={batch.id}>

                  <td>{batch.batchName}</td>

                  <td>{batch.students}</td>

                  <td>{batch.trainer}</td>

                  <td>
                    <span
                      className={`batch-status ${batch.status.toLowerCase()}`}
                    >
                      {batch.status}
                    </span>
                  </td>

                  <td>
                    <div className="batch-actions">

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

    </div>
  );
}

export default ManageBatches;