import React from "react";

const StudentTopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="left-section">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="right-section">
        <i className="fas fa-calendar" onClick={() => {window.location.href = '/calendar';}}></i>
        <i className="fas fa-envelope"></i>
        <i className="fas fa-sign-out-alt"></i>


      </div>
    </div>
  );
};

export default StudentTopNavbar;
