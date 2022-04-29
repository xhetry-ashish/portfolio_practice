import React, { useState } from "react";
import "./header.scss";
//import toggleImage from "../../assets/image/sun.jpg";
//import logoImage from "../../assets/image/logo1.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [isMobile, setMobile] = useState(false);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="brand-title">
            <a href="/">
              <img src={props.data.logo} alt="no internet" />
            </a>
          </div>

          <div
            className={isMobile ? "navbar-links-mobile" : "navbar-links"}
            onClick={() => setMobile(false)}
          >
            <ul>
              <li>
                <Link to={props.data.link1Path}>{props.data.link1}</Link>
              </li>
              <li>
                <Link to={props.data.link2Path}>{props.data.link2}</Link>
              </li>
              <li>
                <Link to={props.data.link3Path}>{props.data.link3}</Link>
              </li>
            </ul>
          </div>
          <div className="toggle-bar" onClick={() => setMobile(!isMobile)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </div>
  );
}
