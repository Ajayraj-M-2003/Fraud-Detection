import React from 'react';
import LeftNavbar from '../../../components/LeftNavbar';
import TopNavbar from '../../../components/TopNavbar';

const Assignments = () => {
  return (
    <div className="faculty-dashboard">
      <LeftNavbar />
      <div className="content">
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
