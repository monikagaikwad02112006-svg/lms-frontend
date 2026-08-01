import TeacherSidebar from "../../components/TeacherSidebar";
import "./TeacherDashboard.css";

function TeacherDashboard() {

  const stats = [
    {
      title:"Total Students",
      value:"250"
    },
    {
      title:"Courses",
      value:"6"
    },
    {
      title:"Assignments",
      value:"18"
    },
    {
      title:"Pending Reviews",
      value:"12"
    }
  ];


  return (

    <div className="teacher-dashboard-layout">

      <TeacherSidebar />


      <div className="teacher-dashboard">


        <div className="teacher-header">

          <h1>
            Welcome Back, Professor 
          </h1>

          <p>
            Manage your courses and students easily.
          </p>

        </div>



        <div className="teacher-stats">

          {
            stats.map((item,index)=>(

              <div className="teacher-card" key={index}>

                <h3>
                  {item.title}
                </h3>

                <h2>
                  {item.value}
                </h2>

              </div>

            ))
          }

        </div>




        <div className="teacher-sections">


          <div className="teacher-box">

            <h3>
              Recent Activities
            </h3>

            <p>
              Uploaded React Notes
            </p>

            <p>
              Created Java Assignment
            </p>

            <p>
              Updated Attendance
            </p>


          </div>



          <div className="teacher-box">

            <h3>
              Upcoming Tasks
            </h3>

            <p>
              Check Assignment Submission
            </p>

            <p>
              Conduct DBMS Quiz
            </p>

          </div>


        </div>


      </div>


    </div>

  );
}


export default TeacherDashboard;