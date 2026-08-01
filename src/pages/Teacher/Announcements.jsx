import "./Announcements.css";

const announcements = [
  {
    id: 1,
    title: "Mid-Term Examination Schedule Released",
    date: "25 July 2025",
    priority: "High",
    description:
      "The mid-term examination timetable has been uploaded. Please check the academic calendar.",
  },
  {
    id: 2,
    title: "React Workshop Registration Open",
    date: "23 July 2025",
    priority: "Medium",
    description:
      "Students can register for the upcoming React Development Workshop before the deadline.",
  },
  {
    id: 3,
    title: "Library Maintenance Notice",
    date: "20 July 2025",
    priority: "Low",
    description:
      "The digital library will be unavailable on Sunday due to scheduled maintenance.",
  },
];

function Announcements() {
  return (
    <div className="announcements-page">
      <div className="announcements-header">
        <h1>Announcements</h1>
        <p>Stay updated with the latest academic notices and updates.</p>
      </div>

      <div className="announcement-search">
        <input
          type="text"
          placeholder="Search announcements..."
        />
      </div>

      <div className="announcements-list">
        {announcements.map((item) => (
          <div className="announcement-card" key={item.id}>
            <div className="announcement-top">

              <div>
                <h3>{item.title}</h3>
                <span className="announcement-date">
                  {item.date}
                </span>
              </div>

              <span
                className={`priority-badge ${item.priority.toLowerCase()}`}
              >
                {item.priority}
              </span>

            </div>

            <p className="announcement-description">
              {item.description}
            </p>

            <button className="read-btn">
              Read More
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;