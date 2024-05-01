import React from "react";

const Dashboard = () => {
  // Define an array of objects representing upcoming classes
  const upcomingClasses = [
    { subject: "Software Engineering", time: "Wednesday, May 1st, 8:00 PM IST" },
    { subject: "Distributed System", time: "Thursday, May 2nd, 10:00 AM IST" },
    { subject: "Software Engineering", time: "Friday, May 3rd, 2:00 PM IST" },
    { subject: "Distributed System", time: "Monday, May 6th, 11:30 AM IST" },
    { subject: "Software Engineering", time: "Tuesday, May 7th, 9:15 AM IST" },
    // Add more upcoming classes here if needed
  ];

  return (
    <div className="dashboard">
      {/* Upcoming Classes Section */}
      <div className="dashboard-section">
        <h2>Upcoming Classes</h2>
        <ol className="classes">
          {/* Map over the upcomingClasses array to display each class */}
          {upcomingClasses.map((upcomingClass) => (
            <li key={upcomingClass.subject}>
              {upcomingClass.subject} - {upcomingClass.time}
            </li>
          ))}
        </ol>
      </div>





      {/* Alert Section (Placeholder) */}
      <div className="dashboard-section">
        <h2>Alert</h2>
        {/* Add content related to Alert here */}
      </div>
    </div>
  );
};

export default Dashboard;
