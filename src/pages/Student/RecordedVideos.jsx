import Sidebar from "../../components/Sidebar";
import "./RecordedVideos.css";

function RecordedVideos() {

  const videos = [
    {
      subject: "React JS",
      title: "React Components & Props",
      instructor: "Prof. Sharma",
      duration: "45 Minutes",
      lectures: "12 Videos",
    },
    {
      subject: "Java Programming",
      title: "Java OOP Concepts",
      instructor: "Prof. Verma",
      duration: "50 Minutes",
      lectures: "10 Videos",
    },
    {
      subject: "Database",
      title: "SQL & Database Fundamentals",
      instructor: "Prof. Patil",
      duration: "35 Minutes",
      lectures: "8 Videos",
    },
    {
      subject: "Data Science",
      title: "Machine Learning Basics",
      instructor: "Prof. Mehta",
      duration: "1 Hour",
      lectures: "15 Videos",
    },
  ];


  return (
    <div className="videos-layout">

      <Sidebar />

      <div className="videos-container">

        <div className="videos-header">
          <h1>Recorded Videos</h1>
          <p>
            Watch recorded lectures and learn anytime, anywhere.
          </p>
        </div>


        <div className="videos-grid">

          {videos.map((video,index)=>(

            <div className="video-card" key={index}>

              <div className="video-thumbnail">
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


                <div className="video-info">

                  <span>
                    🎬 {video.lectures}
                  </span>

                  <span>
                    ⏱ {video.duration}
                  </span>

                </div>


                <button className="watch-btn">
                  Watch Now
                </button>


              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default RecordedVideos;