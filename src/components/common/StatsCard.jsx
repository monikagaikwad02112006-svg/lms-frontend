import "./StatsCard.css";

export default function StatsCard({
  title,
  value,
  icon,
  change,
  positive = true,
}) {
  return (
    <div className="stats-card">
      <div className="stats-card-top">
        <div>
          <p className="stats-title">
            {title}
          </p>

          <h2 className="stats-value">
            {value}
          </h2>
        </div>

        <div className="stats-icon">
          {icon}
        </div>
      </div>

      {change && (
        <div
          className={`stats-change ${
            positive
              ? "positive"
              : "negative"
          }`}
        >
          {change}
        </div>
      )}
    </div>
  );
}