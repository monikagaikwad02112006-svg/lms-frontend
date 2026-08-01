import AdminSidebar from "../../components/AdminSidebar";
import "./Notifications.css";

const notifications = [
  {
    id: 1,
    title: "New Student Registration",
    message: "15 new students have registered today.",
    time: "10 mins ago",
    type: "info",
  },
  {
    id: 2,
    title: "Course Approval Pending",
    message: "React Advanced course requires approval.",
    time: "30 mins ago",
    type: "warning",
  },
  {
    id: 3,
    title: "Teacher Account Approved",
    message: "Prof. Sharma's account has been activated.",
    time: "1 hour ago",
    type: "success",
  },
  {
    id: 4,
    title: "System Maintenance",
    message: "Scheduled maintenance on Sunday at 11 PM.",
    time: "3 hours ago",
    type: "danger",
  },
];

function Notifications() {
  return (
    <div className="notifications-layout">
      <AdminSidebar />

      <div className="notifications-page">
        <div className="notifications-header">
          <h1>Notifications</h1>
          <p>Manage and monitor all system notifications.</p>
        </div>

        <div className="notifications-list">
          {notifications.map((item) => (
            <div className="notification-card" key={item.id}>
              <div className="notification-content">
                <h3>{item.title}</h3>
                <p>{item.message}</p>
                <span>{item.time}</span>
              </div>

              <div className={`notification-badge ${item.type}`}>
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;