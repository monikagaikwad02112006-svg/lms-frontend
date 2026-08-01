import React, { useState } from "react";
import "./Calendar.css";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const daysInMonth = new Date(
    year,
    date.getMonth() + 1,
    0
  ).getDate();

  const firstDay = new Date(
    year,
    date.getMonth(),
    1
  ).getDay();

  const days = [];

  // Empty spaces before first day
  for (let i = 0; i < firstDay; i++) {
    days.push("");
  }

  // Days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }


  const nextMonth = () => {
    setDate(
      new Date(
        year,
        date.getMonth() + 1,
        1
      )
    );
  };

  const prevMonth = () => {
    setDate(
      new Date(
        year,
        date.getMonth() - 1,
        1
      )
    );
  };


  return (
    <div className="calendar">

      <div className="calendar-header">
        <button onClick={prevMonth}>‹</button>

        <h3>
          {month} {year}
        </h3>

        <button onClick={nextMonth}>›</button>
      </div>


      <div className="weekdays">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>


      <div className="days">
        {days.map((day, index) => (
          <div 
            key={index}
            className={
              day === new Date().getDate()
              ? "today"
              : ""
            }
          >
            {day}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Calendar;