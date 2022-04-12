import React from 'react'
import './header.scss'
import Togimg  from '../../assets/image/sun.jpg'
import { Link } from 'react-router-dom'



export default function Header()
 {
  return (
    <div>
     <header>
      <nav className="navbar">
        <div className="brand-title">ashish</div>
        <a href=" " className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              {/* <a href="/home">Home</a> */}
              <Link to="/home">Home</Link>
            </li>
            <li>
              {/* <a href="/projects">Projects</a> */}
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              {/* <a href="/contact">Contact</a> */}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <a id="theme" href=' ' onClick="myFunction()"><img id="theme-img" src={Togimg} alt='img'/></a>
      </nav>
    </header>
    </div>
  )
}
