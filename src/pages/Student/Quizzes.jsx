import Sidebar from "../../components/Sidebar";
import "./Quizzes.css";

function Quizzes() {

  const quizzes = [
    {
      subject: "React JS",
      title: "React Fundamentals Quiz",
      questions: 20,
      duration: "30 Minutes",
      status: "Available",
    },
    {
      subject: "Java",
      title: "OOP Concepts Test",
      questions: 25,
      duration: "40 Minutes",
      status: "Available",
    },
    {
      subject: "Database",
      title: "SQL & DBMS Quiz",
      questions: 15,
      duration: "25 Minutes",
      status: "Completed",
    },
    {
      subject: "Data Structures",
      title: "DSA Practice Quiz",
      questions: 30,
      duration: "45 Minutes",
      status: "Available",
    },
  ];


  return (
    <div className="quizzes-layout">

      <Sidebar />

      <div className="quizzes-container">

        <div className="quizzes-header">
          <h1>Online Quizzes</h1>
          <p>
            Test your knowledge and improve your learning skills.
          </p>
        </div>


        <div className="quiz-grid">

          {quizzes.map((quiz,index)=>(

            <div className="quiz-card" key={index}>

              <div className="quiz-top">
                <span className="subject">
                  {quiz.subject}
                </span>

                <span 
                  className={
                    quiz.status === "Available"
                    ? "available"
                    : "completed"
                  }
                >
                  {quiz.status}
                </span>
              </div>


              <h3>
                {quiz.title}
              </h3>


              <div className="quiz-info">

                <p>
                  📌 Questions: {quiz.questions}
                </p>

                <p>
                  ⏱ Duration: {quiz.duration}
                </p>

              </div>


              <button className="start-btn">
                Start Quiz
              </button>


            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Quizzes;