import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const backHome = () => {
    setClick(false);
  };

  return (
    <nav>
      <div className="logo">
        <NavLink exact to="/" className="logo_btn">
          <h1>Ankush kulkarni</h1>
        </NavLink>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className={click ? "nav_menu active" : "nav_menu"}>
        <ul>
          <li onClick={backHome}>
            <NavLink exact to="/" className="home_btn">
              Home
            </NavLink>
          </li>
          <li onClick={backHome}>
            <NavLink exact to="/work" className="work_btn">
              Work
            </NavLink>
          </li>
          <li onClick={backHome}>
            <NavLink exact to="/skills" className="skills_btn">
              Skills
            </NavLink>
          </li>
          <li onClick={backHome} className="contact_btn">
            <NavLink exact to="/contact" className="contactUp_btn">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="btn">
        <button>
          <NavLink
            exact
            to="/contact"
            className="contactUp_btn"
            onClick={backHome}
          >
            Contact
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
