/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './main.scss'
import profileimg from '../../assets/image/profile.png'
import cv from '../../assets/file/cv.pdf'

export default function Main()
{
    
  return (
    <div>
        <div className="main">
        <div className="left-circle"></div>
        <div className="intro">
          <h1>
            Ashish <br/>
            Basnet
          </h1>
          <p>
            Freelance Full Stack <br/> Developer based in Kathmandu, Nepal.
          </p>
          <div className="btn1">
            <a href='/resume'>Hire Me</a>
            <a  href={cv} download="cv1.pdf">Know Me</a>
          </div>
        </div>
        <div className="profileImage">
          <img src={profileimg} alt='profile'/>
        </div>
        <div className="right-circle"></div>
        <div className="icons">
          <button className="icon" onclick="window.location.href='https://www.facebook.com/';">
            <i className="fa fa-facebook"></i>
          </button>
          <button className="icon" onclick="window.location.href='https://github.com/xhetry-ashish';">
            <i className="fa fa-github"></i>
          </button>
          <button className="icon" onclick="window.location.href='https://www.linkedin.com/in/ashishbasnet/';">
            <i className="fa fa-linkedin"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
