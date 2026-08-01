import "./TodaysClasses.css";

const classes = [
  {
    id: 1,
    subject: "React JS",
    batch: "BCA Final Year",
    time: "09:00 AM - 10:00 AM",
    room: "Lab 101",
  },
  {
    id: 2,
    subject: "DBMS",
    batch: "BSc IT",
    time: "11:00 AM - 12:00 PM",
    room: "Room 205",
  },
  {
    id: 3,
    subject: "Java Programming",
    batch: "MCA Semester 2",
    time: "02:00 PM - 03:00 PM",
    room: "Lab 202",
  },
];

function TodaysClasses() {
  return (
    <div className="classes-page">

      <div className="classes-header">
        <h1>Today's Classes</h1>
        <p>Manage and monitor your scheduled classes.</p>
      </div>

      <div className="classes-grid">

        {classes.map((item) => (
          <div className="class-card" key={item.id}>

            <h3>{item.subject}</h3>

            <p>
              <strong>Batch:</strong> {item.batch}
            </p>

            <p>
              <strong>Time:</strong> {item.time}
            </p>

            <p>
              <strong>Room:</strong> {item.room}
            </p>

            <button className="join-btn">
              View Details
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default TodaysClasses;