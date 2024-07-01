import ReactTypingEffect from 'react-typing-effect';
import hero from '../assets/hero.webp';
import './Hero.css';
import herologo1 from '../assets/incubation.jpg';
import herologo2 from '../assets/nep.png';
import herologo3 from '../assets/nic.png';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section>
      <div id="heroContainer">
        <div>
          <h1 style={{fontSize: "3.3rem" }}>Looking for Dream <br />Internship?</h1>
          <div className="typeWriterContainer">
            <h1 style={{margin: "20px 0"}} className="typeWriter">
              <Typewriter
                words={['Gives hands on experience', 'Get a compitative job', 'On your desire domain']}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>   
          </div>
          <p style={{fontSize: "1.4rem", color: "#3d3a3a", padding: "20px 0", marginRight:"250px"}}>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>
          <div style={{display: "flex", alignItems: "center", gap: 20, margin: "10px 0"}}>
            <div><img src={herologo1} alt="herologo1" style={{width: "100%"}}/></div>
            <div><img src={herologo2}  alt="herologo2" style={{width: "100%"}}/></div>
            <div><img src={herologo3}  alt="herologo3" style={{width: "100%"}}/></div>
          </div>
          <div style={{margin: "50px 0", display: "flex" , gap: 30}}>
            <div>
              <Link to="#" className="navlink button1">Job Portal</Link>
              <p style={{fontSize: 12, margin: "20px 0", textAlign: 'center'}}><i>coming soon</i></p>
            </div>
            <div>
              <Link to="#" className="navlink button2">Our LMS</Link>
              <p style={{fontSize: 12, margin: "20px 0", textAlign: 'center'}}><i>90% Courses are in Urdu</i></p>
            </div>
          </div>
        </div>
        <div>
          <img src={hero} alt="hero Image" id="heroImage" />
        </div>
      </div>
      
    </section>
  );
}

export default Hero;