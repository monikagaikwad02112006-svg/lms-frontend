import "./QuizManagement.css";

const quizzes = [
  {
    id: 1,
    title: "React Fundamentals Quiz",
    subject: "Web Development",
    questions: 20,
    status: "Active",
  },
  {
    id: 2,
    title: "DBMS Unit Test",
    subject: "DBMS",
    questions: 15,
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Java OOP Quiz",
    subject: "Java",
    questions: 25,
    status: "Completed",
  },
];

function QuizManagement() {
  return (
    <div className="quiz-management">

      <div className="quiz-header">
        <div>
          <h1>Quiz Management</h1>
          <p>Create, manage and monitor quizzes</p>
        </div>

        <button className="create-btn">
          + Create Quiz
        </button>
      </div>

      <div className="quiz-toolbar">

        <input
          type="text"
          placeholder="Search quizzes..."
          className="search-input"
        />

        <select className="filter-select">
          <option>All Quizzes</option>
          <option>Active</option>
          <option>Upcoming</option>
          <option>Completed</option>
        </select>

      </div>

      <div className="quiz-table-card">

        <table>

          <thead>
            <tr>
              <th>Quiz Title</th>
              <th>Subject</th>
              <th>Questions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {quizzes.map((quiz) => (
              <tr key={quiz.id}>

                <td>{quiz.title}</td>
                <td>{quiz.subject}</td>
                <td>{quiz.questions}</td>

                <td>
                  <span
                    className={`status-badge ${quiz.status.toLowerCase()}`}
                  >
                    {quiz.status}
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

export default QuizManagement;