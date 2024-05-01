import React from 'react'
import LeftNavbar from '../FacultyDashboard/LeftNavbar'
import TopNavbar from '../FacultyDashboard/TopNavbar'
import Dashboard from './Dashboard'
import "../../styles/FacultyDashboard.css"

const FacultyDashboard = () => {
  return (
    <div className="faculty-dashboard">
      <LeftNavbar />
      <div className="faculty-content">
        <TopNavbar />
        <Dashboard />
      </div>
    </div>
  )
}

export default FacultyDashboard
