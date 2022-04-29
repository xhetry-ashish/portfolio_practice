import React from "react";
import CVprofile from "../../../src/assets/image/cvprofile.jpg";
import "./resume.scss";

function resume() {
  return (
    <div>
      <div className="resume_wrapper">
        <div className="resume_left">
          <div className="resume_image">
            <img src={CVprofile} alt="Resume_image" />
          </div>
          <div className="resume_bottom">
            <div className="resume_item resume_namerole">
              <div className="name">Ashish Basnet</div>
              <div className="role">Full Stack Developer</div>
            </div>
            <div className="resume_item resume_profile">
              <div className="resume_title">Profile</div>
              <div className="resume_info">
                Ambitious and Creative graduating in BSc. CSIT. Excels when
                working within a team to create innovative ideas and developing
                promising projects. Keen to apply existing knowledge, develop
                professionally and work for a dedicated team.
              </div>
            </div>
            <div className="resume_item resume_address">
              <div className="resume_title">Address</div>
              <div className="resume_info">
                Recent: Shankhamul, Kathmandu-Nepal
                <br />
                Permanent: Lalbandi-04, Sarlahi, Nepal
              </div>
            </div>
            <div className="resume_item resume_contact">
              <div className="resume_title">Contact</div>
              <div className="resume_info">
                <div className="resume_subtitle">Phone</div>
                <div className="resume_subinfo">+977 9844443633</div>
              </div>
              <div className="resume_info">
                <div className="resume_subtitle">Email</div>
                <div className="resume_subinfo">ashishxhetry2017@gmail.com</div>
              </div>
            </div>
            <div className="resume_item resume_skills">
              <div className="resume_title">Skills</div>
              <div className="resume_info">
                <div className="skills_list">
                  <div className="skills_left">HTML</div>
                  <div className="skills_bar">
                    <p>
                      <span style={{ width: "90%" }}></span>
                    </p>
                  </div>
                </div>
                <div className="skills_list">
                  <div className="skills_left">CSS</div>
                  <div className="skills_bar">
                    <p>
                      <span style={{ width: "80%" }}></span>
                    </p>
                  </div>
                </div>
                <div className="skills_list">
                  <div className="skills_left">NodeJS</div>
                  <div className="skills_bar">
                    <p>
                      <span style={{ width: "80%" }}></span>
                    </p>
                  </div>
                </div>
                <div className="skills_list">
                  <div className="skills_left">React</div>
                  <div className="skills_bar">
                    <p>
                      <span style={{ width: "50%" }}></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_namerole">
            <div className="name">Ashish Basnet</div>
            <div className="role">Full Stack Developer</div>
          </div>
          <div className="resume_item resume_education">
            <div className="resume_title">Education</div>
            <div className="resume_info">
              <div className="resume_data">
                <div className="year">2015</div>
                <div className="content">
                  <p className="title">SLC</p>
                  <p>
                    School: Shree JanaJyoti H.S. School, Lalbandi-Sarlahi
                    <br />
                    University/Board: Government of Nepal
                  </p>
                </div>
              </div>
              <div className="resume_data">
                <div className="year">2015 - 2017</div>
                <div className="content">
                  <p className="title">Intermediate(+2)</p>
                  <p>
                    School: National School of Sciences, Lainchour-Kathmandu
                    <br />
                    Stream: Science
                    <br />
                    University/Board: National Examination Board
                  </p>
                </div>
              </div>
              <div className="resume_data">
                <div className="year">2017 - Present</div>
                <div className="content">
                  <p className="title">BSc. CSIT</p>
                  <p>
                    College: St. Xavier's College, Maitighar-Kathmandu
                    <br />
                    University/Board: Tribhuwan Univeresity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume_item resume_experience">
            <div className="resume_title">Experience</div>
            <div className="resume_info">
              <div className="resume_data">
                <div className="year">2021 - Present</div>
                <div className="content">
                  <p className="title">Software Engineer Internship</p>
                  <p>
                    Company: Optimum Futurist
                    <br />
                    Roles: Developing application using React and NodeJS<br></br>
                    Location: Thapagaun, New Baneshwor, Kathmandu Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume_item resmue_interests">
            <div className="resume_title">Interests</div>
            <div className="resume_info">
              <div className="interests">
                <div className="int_icon">
                  <i className="fa fa-table-tennis"></i>
                </div>
                <div className="int_data">Table Tennis</div>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fa fa-book-open"></i>
                </div>
                <div className="int_data">Reading</div>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fa fa-film"></i>
                </div>
                <div className="int_data">Movies</div>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fa-solid fa-pen-to-square"></i>
                </div>
                <div className="int_data">Writing</div>
              </div>
            </div>
          </div>
          <div className="resume_item resmue_interests">
            <div className="resume_title">Get Connected With Me Here</div>
            <div className="resume_info">
              <div className="interests">
                <div className="int_icon">
                  <i className="fa fa-facebook"></i>
                </div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="int_data">Facebook</div>
                </a>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fa fa-instagram"></i>
                 
                </div>
                <a
                  href="https://www.instagram.com/xhetryashish/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="int_data">Instagram</div>
                </a>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fa fa-linkedin"></i>
                </div>
                <a
                  href="https://www.linkedin.com/in/ashishbasnet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="int_data">LinkedIn</div>
                </a>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fa fa-github"></i>
                </div>
                <a
                  href="https://www.github.com/xhetry-ashish/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="int_data">Github</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
