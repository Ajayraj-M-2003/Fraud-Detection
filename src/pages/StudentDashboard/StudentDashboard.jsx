import React from 'react'
import StudentLeftNavbar from './StudentLeftNavbar'
import StudentTopNavbar from './StudentTopNavbar'
import SDashboard from "./SDashboard"
import "../../styles/StudentDashboard.css"


const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <StudentLeftNavbar/>
      <div className="content">
        <StudentTopNavbar/>
        <SDashboard />
      </div>
    </div>
  )
}

export default StudentDashboard
