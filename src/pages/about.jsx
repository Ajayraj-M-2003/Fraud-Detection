import React from 'react';
import '../components/about.css';
import rohith from "../assets/rohith.jpg";
import ajay from "../assets/ajay.jpg";
import advaith from "../assets/advaith.jpg";

import harish from "../assets/harish.jpg";
import praveen from "../assets/praveen.jpg";



const Team = () => {
    return (
        <div className='about-section'>


<div class="contact-container">
    <div className="contact-heading">
        <h2>Contact Us</h2>
        <p>Have a question or want to learn more about our services? Reach out to us and we’ll get back to you shortly.</p>
    </div>
        <div class="contact-form">
            <form action="https://api.web3forms.com/submit" method="POST" class="form">

                <input type="hidden" name="access_key" value="f9ae66a4-7cff-4fcb-bd8a-591587d9ac0d"/>
                <input type="text" id="name" name="name" placeholder="Your Name" required/>
                <input type="email" id="email" name="email" placeholder="Your Email" required/>
                <textarea name="message" id="message" placeholder="Your Message" rows="10" required></textarea>
                <div class="button-flex">
                    <button type="submit" class="submit-button">Send</button>
                    <button type="reset" class="reset-button">Reset</button>
                </div>
            </form>
        </div>
</div>


            <div className="team">
            <span>Meet Our</span>
            <h2>Team</h2>
            <p>Our diverse team, comprising UX designers, product designers, and web developers, collaborates passionately to deliver exceptional results. With a shared commitment to excellence, we strive to surpass expectations and innovate at every step.</p>
            <span className="bg-watermark">Team</span>
            <div className="cards">
                <div className="card">
                    <img src={advaith} alt="Franklin Carlson" />
                    <div className="card-content">
                        <h3>Advaith Shankar S S</h3>
                        <p>Product Owner</p>

                        <ul>
                        <li><a href="https://github.com/adhvaithsankar" target='_blank'><i className="fa-brands fa-linkedin-in">CONTACT</i></a></li>

                        </ul>
                    </div>
                </div>

                <div className="card">
                    <img src={rohith} alt="Franklin Carlson" />
                    <div className="card-content">
                        <h3>Rohith M</h3>
                        <p>Scrum Master</p>
                        <ul>
                        <li><a href="https://www.linkedin.com/in/rohith-m-profilein/" target='_blank'><i className="fa-brands fa-linkedin-in">CONTACT</i></a></li>

                        </ul>
                    </div>
                </div>

                <div className="card">
                    <img src={praveen} alt="Franklin Carlson" />
                    <div className="card-content">
                        <h3>Praveen N</h3>
                        <p>Tester</p>

                        <ul>
                        <li><a href="https://www.linkedin.com/in/praveen-n-6a7415239/" target='_blank'><i className="fa-brands fa-linkedin-in">CONTACT</i></a></li>

                        </ul>
                    </div>
                </div>

                <div className="card">
                    <img src={ajay} alt="Ajayraj M" />
                    <div className="card-content">
                        <h3>Ajayraj M</h3>
                        <p>Developerr</p>
                        <ul>
                        <li><a href="https://www.linkedin.com/in/ajayraj-m-721170252/" target="_blank"><i className="fa-brands fa-linkedin-in">Contact</i></a></li>
                        </ul>
                    </div>
                </div>

                

                <div className="card">
                    <img src={harish} alt="Franklin Carlson" />
                    <div className="card-content">
                        <h3>Harish T S</h3>
                        <p>Developer</p>

                        <ul>
                        <li><a href="https://www.linkedin.com/in/harish-t-s-748a9a250/" target='_blank'><i className="fa-brands fa-linkedin-in">CONTACT</i></a></li>

                        </ul>
                    </div>
                </div>
                
            </div>
            </div>




            



        </div>
    );
}

export default Team;
