import ReactTypingEffect from 'react-typing-effect';
import hero from '../assets/hero.webp';
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
  return (
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
        <p style={{fontSize: "1.4rem", color: "#3d3a3a", padding: "20px 0"}}>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>
      </div>
      <div>
        <img src={hero} alt="hero Image" id="heroImage" />
      </div>
    </div>
  );
}

export default Hero;