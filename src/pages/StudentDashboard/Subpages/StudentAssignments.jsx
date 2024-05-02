import React from 'react';
import LeftNavbar from '../StudentLeftNavbar';
import TopNavbar from '../StudentTopNavbar';

const StudentAssignments = () => {

  const upcomingClasses = [
    { subject: "Software Engineering  19CSE314" },
    { subject: "Distributed System  19CSE312" },
    { subject: "Cryptography  19CSE331"},
    { subject: "IOT  19CSE446" },
   
    // Add more upcoming classes here if needed
  ];


  return (
    <div className="student-dashboard">
      <LeftNavbar />
      <div className="faculty-content">
        <TopNavbar />
        <div className="dashboard-section">
        <h2>Registered Courses</h2>
        <ol className="classes">
          {/* Map over the upcomingClasses array to display each class */}
          {upcomingClasses.map((upcomingClass) => (
            <li key={upcomingClass.subject}>
              {upcomingClass.subject} - {upcomingClass.time}
            </li>
          ))}
        </ol>
        
      </div>
    </div>
    </div>
  );
};

export default StudentAssignments;
