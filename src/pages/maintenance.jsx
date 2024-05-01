import React, { useState, useEffect } from 'react';
import '../components/maintenance.css';
function Maintenance() {
  const [countdown, setCountdown] = useState({
    days: 9,
    hours: 2,
    minutes: 2,
    seconds: 11
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        let { days, hours, minutes, seconds } = prevCountdown;

        seconds--;

        if (seconds === 0) {
          minutes--;
          seconds = 59;
        }
        if (minutes === 0) {
          hours--;
          minutes = 59;
        }
        if (hours === 0) {
          days--;
          hours = 23;
        }

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="maintenance-container">
      <header>WEBSITE IS UNDER MAINTENANCE.</header>
      <p>
        We are excited to announce that we will be launching soon and can't wait to share our new platform with you.
      </p>
      <div className="maintenance-time-content">
        <div className="maintenance-time days">
          <span className="number">{countdown.days < 10 ? `0${countdown.days}` : countdown.days}</span>
          <span className="text">days</span>
        </div>
        <div className="maintenance-time hours">
          <span className="number">{countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}</span>
          <span className="text">hours</span>
        </div>
        <div className="maintenance-time minutes">
          <span className="number">{countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}</span>
          <span className="text">minutes</span>
        </div>
        <div className="maintenance-time seconds">
          <span className="number">{countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}</span>
          <span className="text">seconds</span>
        </div>
      </div>
      
    </div>
  );
}

export default Maintenance;
