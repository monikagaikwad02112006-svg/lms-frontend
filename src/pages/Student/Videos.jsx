import Sidebar from "../../components/Sidebar";
import "./Videos.css";

function Videos() {

  const videos = [
    {
      title: "Introduction to React JS",
      subject: "React JS",
      instructor: "Prof. Sharma",
      duration: "45 Minutes",
    },
    {
      title: "Java OOP Concepts",
      subject: "Java",
      instructor: "Prof. Verma",
      duration: "50 Minutes",
    },
    {
      title: "SQL Database Basics",
      subject: "DBMS",
      instructor: "Prof. Patil",
      duration: "35 Minutes",
    },
    {
      title: "Machine Learning Introduction",
      subject: "AI & ML",
      instructor: "Dr. Neha",
      duration: "1 Hour",
    },
    {
      title: "Data Structures - Linked List",
      subject: "DSA",
      instructor: "Prof. Kulkarni",
      duration: "40 Minutes",
    },
    {
      title: "HTML CSS Complete Guide",
      subject: "Web Development",
      instructor: "Prof. Singh",
      duration: "55 Minutes",
    },
  ];


  return (
    <div className="videos-layout">

      <Sidebar />

      <div className="videos-container">


        <div className="videos-header">
          <h1>Learning Videos</h1>
          <p>
            Watch lectures and improve your skills anytime.
          </p>
        </div>


        <div className="video-search">

          <input
            type="text"
            placeholder="Search videos..."
          />

        </div>



        <div className="videos-grid">


          {videos.map((video,index)=>(

            <div className="video-card" key={index}>


              <div className="thumbnail">
                ▶
              </div>


              <div className="video-content">


                <span className="subject-tag">
                  {video.subject}
                </span>


                <h3>
                  {video.title}
                </h3>


                <p>
                  Instructor: {video.instructor}
                </p>


                <div className="video-details">

                  <span>
                    ⏱ {video.duration}
                  </span>

                  <span>
                    🎥 Lecture
                  </span>

                </div>


                <button>
                  Watch Video
                </button>


              </div>


            </div>

          ))}


        </div>


      </div>

    </div>
  );
}


export default Videos;