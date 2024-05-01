import React from 'react'
import LeftNavbar from '../StudentLeftNavbar';
import TopNavbar from '../StudentTopNavbar';
import '../../../components/FacultyDashboard.css';
import faculty from '../../../assets/faculty.jpg';
import StudentLeftNavbar from '../StudentLeftNavbar';
import StudentTopNavbar from '../StudentTopNavbar';


const StudentProfile = () => {
  return (
    <div className="student-dashboard">
      <StudentLeftNavbar/>
      <div className="faculty-content">
        <StudentTopNavbar />
        <div className='fac-container'>
          <div className='image'>
            <img src={faculty} alt="logo" />
          </div>
            
        </div>
        <p className='description'>
            <h3>Dr. John Doe </h3> Established proffesor is a dedicated and experienced Computer Science teacher with over 10 years of experience in the field.
            He holds a Master's degree in Computer Science from a prestigious university and has a passion for coding and technology. 
            Mr. Doe is known for his innovative teaching methods that make complex concepts easy to understand. He believes in hands-on learning 
            and often incorporates real-world projects into his curriculum to enhance the learning experience. 
            His expertise lies in programming languages such as Python, Java, and C++, and he has a keen interest in Artificial Intelligence and
              Machine Learning. Mr. Doe is not just a teacher, but a mentor who inspires his students to pursue their passion in the tech world.
          </p>
      </div>
    </div>
  )
}

export default StudentProfile
