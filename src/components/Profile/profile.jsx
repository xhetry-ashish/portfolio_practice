import React from "react";
//import emoji from "react-easy-emoji";
import Button from "../common/Button/button";
import "./profile.scss";
import Icon from "../common/Icon/icon";
import { Link } from "react-router-dom";



function Profile(props) {
 
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            
          
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, It's me <span className="highlighted-text">{props.data.name}</span>
            </span>
          </div>
          
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
           <Link to='/resume'> <Button>Know Me</Button></Link>
           <Link to='/contact'> <Button>Hire Me</Button></Link>
          </div>
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
