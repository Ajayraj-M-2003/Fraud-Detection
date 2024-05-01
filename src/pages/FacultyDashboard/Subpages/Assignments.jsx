import React from 'react';
import LeftNavbar from '../LeftNavbar';
import TopNavbar from '../TopNavbar';

const Assignments = () => {
  return (
    <div className="faculty-dashboard">
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

export default Assignments;
