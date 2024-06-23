import './Header.css'
import logo from '../assets/logo.webp';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div id="header">
      <div>
        <img src={logo} alt="logo" id="logo"/>
      </div>
      <div>
        <ul id="navbar">
          <li><NavLink to="#" className="navlink">Internship</NavLink></li>
          <li><NavLink to="#" className="navlink">Company Collaborations</NavLink></li>
          <li><NavLink to="#" className="navlink">Contact Us</NavLink></li>
          <li><NavLink to="#" className="navlink button1">Job Portal</NavLink></li>
          <li><NavLink to="#" className="navlink button2">Internee's Login</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;