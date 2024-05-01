// Calendar.jsx

import React, { useState } from 'react';

import '../../../styles/Calendar.css';
import LeftNavbar from '../../../components/LeftNavbar';
import '../../../styles/Calendar.css';
import TopNavbar from '../../../components/TopNavbar';

const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const getEmptyCells = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <div key={`empty-${index}`} className="empty-cell"></div>
    ));
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className='faculty-dashboard'>
      <LeftNavbar/>
      <div className='content'>
        <TopNavbar/>
    <div className="calendar-container">
      <div className="calendar-header">
        <button className='prev' onClick={goToPreviousMonth}>&lt;</button>
        {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
        <button className="next" onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar">
        <div className="calendar-days">
          <div className="day">Sun</div>
          <div className="day">Mon</div>
          <div className="day">Tue</div>
          <div className="day">Wed</div>
          <div className="day">Thu</div>
          <div className="day">Fri</div>
          <div className="day">Sat</div>
        </div>
        <div className="calendar-dates">
          {getEmptyCells(firstDayOfMonth)}
          {Array.from({ length: daysInMonth }, (_, index) => (
            <div key={`date-${index}`} className="date">{index + 1}</div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Calendar;
