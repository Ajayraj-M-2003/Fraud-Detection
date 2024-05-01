import React from 'react'
import LeftNavbar from '../../components/LeftNavbar'
import TopNavbar from '../../components/TopNavbar'
import Dashboard from '../../components/Dashboard'

const FacultyDashboard = () => {
  return (
    <div className="faculty-dashboard">
      <LeftNavbar />
      <div className="content">
        <TopNavbar />
        <Dashboard />
      </div>
    </div>
  )
}

export default FacultyDashboard
