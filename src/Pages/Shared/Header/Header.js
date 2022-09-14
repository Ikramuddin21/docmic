import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import menuIcon from "../../../images/menu-icon.svg";
import closeIcon from "../../../images/close-icon.svg";
import "./Header.css";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <header className={ responsive ? "header" : ""}>
      <nav className="header-nav">
        <div className="logo-area">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* mobile menu start */}
        <div className="mobile-menu">
          {
            !responsive ?
              <img onClick={() => setResponsive(true)} src={menuIcon} alt="" /> :
              <img className="close-icon" onClick={() => setResponsive(false)} src={closeIcon} alt="" />
          }
        </div>
        {/* mobile menu end */}

        <ul className={`header-lists ${responsive ? "mobile-show" : ""}`}>
          <li>
            <Link className="active" onClick={() => setResponsive(false)} to="">Home</Link>
          </li>
          <li>
            <Link onClick={() => setResponsive(false)} to="">About</Link>
          </li>
          <li>
            <Link onClick={() => setResponsive(false)} to="">Departments</Link>
          </li>
          <li>
            <Link onClick={() => setResponsive(false)} to="">Pages</Link>
          </li>
          <li>
            <Link onClick={() => setResponsive(false)} to="">Blog</Link>
          </li>
          <li>
            <Link onClick={() => setResponsive(false)} to="">Contacts</Link>
          </li>
        </ul>

        <div className={`header-right ${responsive ? "mobile-show" : ""}`}>
          <button onClick={() => setResponsive(false)} className="shared-button">Free Consultation</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
