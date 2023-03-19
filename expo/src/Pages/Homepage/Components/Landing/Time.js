import React from "react";
import { useState, useEffect } from "react";
import "./Time.css"

const Time = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "February, 24, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" role="timer">
      <div className="tcol-4">
        <div className="box">
          <p id="day">{days < 10 ? "0" + days : days}<span className="text">days</span></p>
        </div>
      </div>
      <div className="tcol-4">
        <div className="box">
          <p id="hour">{hours < 10 ? "0" + hours : hours}<span className="text">hrs</span></p>
        </div>
      </div>
      <div className="tcol-4">
        <div className="box">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}<span className="text">min</span></p>
        </div>
      </div>
      <div className="tcol-4">
        <div className="box">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}<span className="text">sec</span></p>
        </div>
      </div>
    </div>
  );
};

export default Time;
