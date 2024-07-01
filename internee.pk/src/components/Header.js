import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../assets/logo.webp';
const Header = () => {
  return (
    <div id="header">
      <div>
        <img src={logo} alt="logo" id="logo"/>
      </div>
      <nav>
        <ul id="navbar">
          <li><NavLink to="#" className="navlink" activeClassName="active">Internship</NavLink></li>
          <li><NavLink to="#" className="navlink" activeClassName="active">Company Collaborations</NavLink></li>
          <li><NavLink to="#" className="navlink" activeClassName="active">Contact Us</NavLink></li>
          <li><NavLink to="#" className="navlink button1" activeClassName="active">Job Portal</NavLink></li>
          <li><NavLink to="#" className="navlink button2" activeClassName="active">Internee's Login</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;