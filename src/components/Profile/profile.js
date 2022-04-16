import React from "react";
import Typical from "react-typical";
import "./profile.scss";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href=" ">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href=" ">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href=" ">
                <i className="fa fa-github-square"></i>
              </a>
              <a href=" ">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, It's me <span className="highlighted-text">Ashish</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "Tech Enthusiast",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building Responsive Application with Frontend and Backend
                Operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="resume.pdf" download={"ashishcv.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
