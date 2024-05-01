import React from 'react';
import '../components/top.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const Top = () => {
  return (
    <header className='top-header'>
      <nav>
        <div className="logo">
          <h1 className="logo-top">
            <img src={logo} alt="" />
            <a href="#" className='Name' style={{color:'#00b894'}}>Overflow</a>
          </h1>
        </div>
        <div className="menu">
        <Link to="/Register">Signin</Link>
        <Link to="/signin">Login</Link>
        </div>
      </nav>

      <main>
        <section>
          <h3>Welcome To Overflow</h3>
          <h1>Overflow Solutions Empowers Businesses Worldwide! <br /><span className="change_content"> </span></h1>
          <p>"Elevating Your Business Beyond Boundaries!"</p>
          <Link to="/Register" className='btntwo'>Signup Here</Link>

        </section>
      </main>
    </header>
  );
};

export default Top;
