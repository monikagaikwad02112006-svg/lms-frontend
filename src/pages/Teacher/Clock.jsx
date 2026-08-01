import "./Clock.css";
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentTime = time.toLocaleTimeString();

  const currentDate = time.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="clock-page">

      <div className="clock-card">

        <h1>Digital Clock</h1>

        <div className="time">
          {currentTime}
        </div>

        <div className="date">
          {currentDate}
        </div>

      </div>

    </div>
  );
}

export default Clock;