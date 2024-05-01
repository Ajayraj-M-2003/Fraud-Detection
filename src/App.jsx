import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Forgot from './pages/Forgot.jsx';
import Signin from './pages/Signin.jsx';
import Reset from './pages/Reset.jsx';
import Faq from './pages/faq.jsx';
import About from './pages/about.jsx';
import Landing from './pages/landing.jsx';

import FacultyDashboard from './pages/FacultyDashboard/FacultyDashboard.jsx';
import Profile from './pages/FacultyDashboard/Subpages/Profile.jsx';
import Calendar from './pages/FacultyDashboard/Subpages/Calendar.jsx';
import Assignments from './pages/FacultyDashboard/Subpages/Assignments.jsx';

import './styles/FacultyDashboard.css'

import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx';
import StudentProfile from './pages/StudentDashboard/Subpages/StudentProfile.jsx';
import StudentAssignments from './pages/StudentDashboard/Subpages/StudentAssignments.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset' element={<Reset />} />
        <Route path= '/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/landing' element={<Landing />} />

        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/assignments" element={<Assignments />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/student-calendar" element={<Calendar />} />
        <Route path="/student-assignments" element={<StudentAssignments />} />
      </Routes>
    </Router>
  );
}

export default App;