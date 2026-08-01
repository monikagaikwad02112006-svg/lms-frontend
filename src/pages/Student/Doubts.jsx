import Sidebar from "../../components/Sidebar";
import "./Doubts.css";

function Doubts() {
  const doubts = [
    {
      subject: "React JS",
      question: "How does useEffect work in React?",
      status: "Answered",
    },
    {
      subject: "Java",
      question: "Difference between Abstract Class and Interface?",
      status: "Pending",
    },
    {
      subject: "Database",
      question: "What is Normalization?",
      status: "Answered",
    },
  ];

  return (
    <div className="doubts-layout">
      <Sidebar />

      <div className="doubts-container">
        <div className="doubts-header">
          <h1>Doubt Forum</h1>
          <p>Ask questions and get guidance from teachers.</p>
        </div>

        <div className="ask-doubt-card">
          <input
            type="text"
            placeholder="Enter your doubt..."
          />

          <button>Post Doubt</button>
        </div>

        <div className="doubts-list">
          {doubts.map((doubt, index) => (
            <div className="doubt-card" key={index}>
              <div className="doubt-top">
                <span className="subject">
                  {doubt.subject}
                </span>

                <span
                  className={
                    doubt.status === "Answered"
                      ? "answered"
                      : "pending"
                  }
                >
                  {doubt.status}
                </span>
              </div>

              <h3>{doubt.question}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doubts;