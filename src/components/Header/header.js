import React from "react";
import "./header.scss";
import toggleImage from "../../assets/image/sun.jpg";
import logoImage from "../../assets/image/logo1.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <nav class="navbar">
          <div class="brand-title">
            <a href="/">
              <img src={logoImage} alt="no internet" />
            </a>
          </div>
          <div class="toggle-bar">
            <a href=" " class="toggle-button">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </a>
          </div>

          <div class="navbar-links">
            <ul>
              <li>
                <Link to="/project">Projects</Link>
                {/* <a href="#projects">Projects</a> */}
              </li>
              <li>
                <Link to="/contact">Contact</Link>
                {/* <a href="#contact">Contact</a> */}
              </li>
              <li>
                <Link to="/testimonial">Testimonial</Link>
                {/* <a href="#contact">Testimonials</a> */}
              </li>
            </ul>
          </div>
          <div class="theme">
            <a onclick="myFunction()" href=" ">
              <img id="theme-img" src={toggleImage} alt="no load" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
