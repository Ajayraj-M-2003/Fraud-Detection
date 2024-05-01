import "./App.css";
import "./styles/FacultyDashboard.css";


import FacultyDashboard from "./pages/FacultyDashboard/FacultyDashboard";
import Calendar from "./pages/FacultyDashboard/Subpages/Calendar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./pages/FacultyDashboard/Subpages/Profile";
import Assignments from "./pages/FacultyDashboard/Subpages/Assignments"
function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <Router>
      <Routes>
        <Route path="/" element={<FacultyDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
