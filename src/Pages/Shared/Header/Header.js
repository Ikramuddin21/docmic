import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo-area">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="header-lists">
          <li>
            <Link  className="active" to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Departments</Link>
          </li>
          <li>
            <Link to="">Pages</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Contacts</Link>
          </li>
        </ul>
        <div className="header-right">
          <button className="shared-button">Free Consultation</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
