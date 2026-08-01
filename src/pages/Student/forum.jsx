import Sidebar from "../../components/Sidebar";
import "./Forum.css";

function Forum() {
  const discussions = [
    {
      title: "Best way to learn React Hooks?",
      author: "Monika",
      replies: 12,
      category: "React",
    },
    {
      title: "Java Interview Preparation Tips",
      author: "Rahul",
      replies: 8,
      category: "Java",
    },
    {
      title: "DBMS Important Questions",
      author: "Sneha",
      replies: 15,
      category: "Database",
    },
  ];

  return (
    <div className="forum-layout">
      <Sidebar />

      <div className="forum-container">
        <div className="forum-header">
          <h1>Student Forum</h1>
          <p>
            Connect, discuss and learn with fellow students.
          </p>
        </div>

        <div className="forum-create">
          <input
            type="text"
            placeholder="Start a new discussion..."
          />
          <button>Create Post</button>
        </div>

        <div className="discussion-list">
          {discussions.map((post, index) => (
            <div className="discussion-card" key={index}>
              <div className="discussion-top">
                <span className="category">
                  {post.category}
                </span>

                <span className="replies">
                  💬 {post.replies} Replies
                </span>
              </div>

              <h3>{post.title}</h3>

              <p>
                Posted by <strong>{post.author}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forum;