import React from "react";
import './services.scss'
import node from '../../assets/image/nodejs.jpg'

function testimonial() {
  return (
    <div>
      <h2>My Services</h2>
      <div className="ser-container">
        <div className="ser-col">
          <div className="ser-img">
            <img src={node} alt=''></img>
          </div>
          <span className="title">Mobile App Development</span>
          <span className="details">Delevering a quality responsive mobile app as of your need.</span>
        </div>

        <div className="ser-col">
          <div className="ser-img">
            <img src={node} alt=''></img>
          </div>
          <span className="title">Web App Development</span>
          <span className="details">Delevering a quality responsive web app as of your need. </span>
        </div>

        <div className="ser-col">
          <div className="ser-img">
            <img src={node} alt=''></img>
          </div>
          <span className="title">Software Testing</span>
          <span className="details">Testing your developed system for more improvement and quality assurance</span>
        </div>

      </div>
    </div>
  );
}

export default testimonial;
