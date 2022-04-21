import React from "react";
import "./header.scss";
//import toggleImage from "../../assets/image/sun.jpg";
//import logoImage from "../../assets/image/logo1.png";
import { Link } from "react-router-dom";
import Rotate from "../Rotation/rotate";

export default function Header(props) {
  return (
    <div>
      <header>
        <nav class="navbar">
          <div class="brand-title">
            <a href="/">
            <Rotate><img src={props.data.logo} alt="no internet" /></Rotate>
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
                <Link to={props.data.link1Path}>{props.data.link1}</Link>
                {/* <a href="#projects">Projects</a> */}
              </li>
              <li>
                <Link to={props.data.link2Path}>{props.data.link2}</Link>
                {/* <a href="#contact">Contact</a> */}
              </li>
              <li>
                <Link to={props.data.link3Path}>{props.data.link3}</Link>
                {/* <a href="#contact">Testimonials</a> */}
              </li>
            </ul>
          </div>
          <div class="theme">
            <a onclick="myFunction()" href=" ">
              <img id="theme-img" src={props.data.toggleImageLight} alt="no load" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
