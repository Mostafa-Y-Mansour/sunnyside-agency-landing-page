import logo from "../../images/logo.svg"
import "./Navbar.css"

import React, {useState} from "react"


function Navbar() {
  const [isActive, setActive] = useState(false);
  function toggleClass() {setActive(!isActive)};

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div onClick={toggleClass} className={`burger ${isActive? "clicked": ""}`} >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isActive? "showed": ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
    </>
  )
};

export default Navbar;