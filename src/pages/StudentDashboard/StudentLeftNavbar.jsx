// LeftNavbar.js

import React from "react";

const StudentLeftNavbar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-item" onClick={() => {window.location.href = '/student-profile';}}>
      
        <i className="fas fa-user" ></i>  
        <span className="sidebar-title">Profile</span>
      </div>
      <div className="sidebar-item" onClick={() => {window.location.href = '/student-dashboard';}}>
        <i className="fas fa-tachometer-alt"></i>
        <span className="sidebar-title">Dashboard</span>
      </div>

      <div className="sidebar-item" onClick={() => {window.location.href = '/student-assignments';}}>
      <i className="fas fa-tasks"></i>
        <span className="sidebar-title">Assignments</span>
      </div>

      <div className="sidebar-item">
      <i className="fas fa-book"></i>
        <span className="sidebar-title">Learning Materials</span>
      </div>


      
      <div className="sidebar-item">
        <i className="fas fa-info-circle"></i>
        <span className="sidebar-title">Details</span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-bell"></i>
        <span className="sidebar-title">Notification</span>
      </div>
    </div>
  );
};

export default StudentLeftNavbar;
