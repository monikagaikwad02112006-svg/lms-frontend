import Sidebar from "../../components/Sidebar";
import "./TeacherDirectory.css";

function TeacherDirectory() {

  const teachers = [
    {
      name: "Dr. Amit Sharma",
      subject: "React & Web Development",
      experience: "8 Years Experience",
      email: "amit.sharma@lms.com",
      status: "Available",
    },
    {
      name: "Prof. Sneha Verma",
      subject: "Java Programming",
      experience: "6 Years Experience",
      email: "sneha.verma@lms.com",
      status: "Available",
    },
    {
      name: "Prof. Raj Patil",
      subject: "Database Management",
      experience: "10 Years Experience",
      email: "raj.patil@lms.com",
      status: "Busy",
    },
    {
      name: "Dr. Neha Kulkarni",
      subject: "Data Science & AI",
      experience: "7 Years Experience",
      email: "neha.kulkarni@lms.com",
      status: "Available",
    },
  ];


  return (
    <div className="teacher-layout">

      <Sidebar />

      <div className="teacher-container">


        <div className="teacher-header">
          <h1>Teacher Directory</h1>
          <p>
            Connect with your teachers and explore their expertise.
          </p>
        </div>


        <div className="search-box">
          <input
            type="text"
            placeholder="Search teacher or subject..."
          />
        </div>



        <div className="teacher-grid">


          {teachers.map((teacher,index)=>(

            <div className="teacher-card" key={index}>


              <div className="profile-circle">
                {teacher.name.charAt(0)}
              </div>



              <h2>
                {teacher.name}
              </h2>


              <span className="subject">
                {teacher.subject}
              </span>



              <p>
                {teacher.experience}
              </p>


              <p className="email">
                {teacher.email}
              </p>



              <span
                className={
                  teacher.status === "Available"
                  ? "available"
                  : "busy"
                }
              >
                {teacher.status}
              </span>



              <button className="profile-btn">
                View Profile
              </button>


            </div>

          ))}


        </div>


      </div>


    </div>
  );
}


export default TeacherDirectory;