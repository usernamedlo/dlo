import { useState, useEffect } from "react";

export default function CurrentTime() {
  const [date, setDate] = useState(new Date());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nove", "Dec"];

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dayName = days[date.getDay()];
  const dayNumber = date.getDate();
  const monthName = months[date.getMonth()];
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  return (
    <span>
      <div className="date-time">
        <div className="day-name">{dayName}</div>
        <div className="day-number">{dayNumber}</div>
        <div className="month">{monthName}</div>
        <div className="time">{hours}:{minutes < 10 ? "0" : ""}{minutes}</div>
        <div className="ampm">{ampm}</div>
      </div>
    </span>
  );
}
