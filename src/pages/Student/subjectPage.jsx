import Sidebar from "../../components/Sidebar";
import "./SubjectPage.css";

function SubjectPage() {

  const subjects = [
    {
      name: "React JS",
      code: "CS-401",
      teacher: "Prof. Sharma",
      description:
        "Learn modern React development including components, hooks and state management.",
      progress: "85%",
    },

    {
      name: "Java Programming",
      code: "CS-402",
      teacher: "Prof. Verma",
      description:
        "Understand OOP concepts, classes, inheritance and advanced Java programming.",
      progress: "70%",
    },

    {
      name: "Database Management",
      code: "CS-403",
      teacher: "Prof. Patil",
      description:
        "Study SQL, normalization, transactions and database design.",
      progress: "90%",
    },

    {
      name: "Data Structures",
      code: "CS-404",
      teacher: "Prof. Kulkarni",
      description:
        "Master arrays, linked lists, trees, graphs and algorithms.",
      progress: "75%",
    },
  ];


  return (

    <div className="subject-layout">

      <Sidebar />

      <div className="subject-container">


        <div className="subject-header">

          <h1>My Subjects</h1>

          <p>
            Explore your enrolled subjects and track learning progress.
          </p>

        </div>



        <div className="subject-grid">


          {subjects.map((subject,index)=>(

            <div className="subject-card" key={index}>


              <div className="subject-top">

                <span className="subject-code">
                  {subject.code}
                </span>

              </div>



              <h2>
                {subject.name}
              </h2>



              <p className="teacher">
                Instructor: {subject.teacher}
              </p>



              <p className="description">
                {subject.description}
              </p>



              <div className="progress-section">

                <div className="progress-header">

                  <span>
                    Course Progress
                  </span>

                  <span>
                    {subject.progress}
                  </span>

                </div>


                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: subject.progress
                    }}
                  ></div>

                </div>


              </div>



              <button className="view-subject-btn">
                View Subject
              </button>



            </div>

          ))}


        </div>


      </div>


    </div>

  );
}


export default SubjectPage;