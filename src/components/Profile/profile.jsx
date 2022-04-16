import React from "react";
import emoji from "react-easy-emoji";
//import TypeWriterEffect from "react-typewriter-effect";
import Button from "../Button/button";
import "./profile.scss";
//import profileImage from "../../assets/image/profile.png";
import Icon from "../Icon/icon";



function Profile(props) {
 
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href={props.data.facebookLink} target="_blank" rel="noreferrer">
                <Icon className="fa fa-facebook"></Icon>
              </a>
              <a href={props.data.linkedinLink} target="_blank" rel="noreferrer">
              <Icon className="fa fa-linkedin"></Icon>
              </a>
              <a href={props.data.githubLink} target="_blank" rel="noreferrer">
              <Icon className="fa fa-github"></Icon>
              </a>
              <a href={props.data.instagramLink} target="_blank" rel="noreferrer">
              <Icon className="fa fa-instagram"></Icon>
              </a>
            </div>
          </div>
          
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, It's me <span className="highlighted-text">{props.data.name}</span>
            </span>
          </div>
          <h2><span className="wave-emoji">{emoji("👋")}</span></h2>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>{props.data.profileRole}
              </h1>
              <span className="profile-role-tagline">
                {props.data.profileTagline}
              </span>
            </span>
          </div>
          <div className="profile-options">
            <Button>Get Resume</Button>
            <Button>Hire Me</Button>
            {/* <button className="btn primary-btn"> Hire Me </button> */}
            {/* <a href="resume.pdf" download={"ashishcv.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a> */}
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
            <img src= {props.data.Image} alt="no loading"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
