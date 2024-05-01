import React from 'react';
import LeftNavbar from '../StudentLeftNavbar';
import TopNavbar from '../StudentTopNavbar';

const StudentAssignments = () => {
  return (
    <div className="student-dashboard">
      <LeftNavbar />
      <div className="faculty-content">
        <TopNavbar />
        <div>
          <h2>Create Assignments</h2>
          <button>Create Test</button>
        </div>
        <div>
          <h2>Analysis History</h2>
          {/* Add content for analysis history here */}
        </div>
      </div>
    </div>
  );
};

export default StudentAssignments;
