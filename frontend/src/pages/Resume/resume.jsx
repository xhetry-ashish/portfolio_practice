import React from "react";
import CVprofile from "../../../src/assets/image/cvprofile.jpg";
import "./resume.scss";

function resume() {
  return (
    <div>
      <div class="resume_wrapper">
        <div class="resume_left">
          <div class="resume_image">
            <img src={CVprofile} alt="Resume_image" />
          </div>
          <div class="resume_bottom">
            <div class="resume_item resume_namerole">
              <div class="name">Ashish Basnet</div>
              <div class="role">Full Stack Developer</div>
            </div>
            <div class="resume_item resume_profile">
              <div class="resume_title">Profile</div>
              <div class="resume_info">
                Ambitious and Creative graduating in BSc. CSIT. Excels when
                working within a team to create innovative ideas and developing
                promising projects. Keen to apply existing knowledge, develop
                professionally and work for a dedicated team.
              </div>
            </div>
            <div class="resume_item resume_address">
              <div class="resume_title">Address</div>
              <div class="resume_info">
                Recent: Shankhamul, Kathmandu-Nepal
                <br />
                Permanent: Lalbandi-04, Sarlahi, Nepal
              </div>
            </div>
            <div class="resume_item resume_contact">
              <div class="resume_title">Contact</div>
              <div class="resume_info">
                <div class="resume_subtitle">Phone</div>
                <div class="resume_subinfo">+977 9844443633</div>
              </div>
              <div class="resume_info">
                <div class="resume_subtitle">Email</div>
                <div class="resume_subinfo">ashishxhetry2017@gmail.com</div>
              </div>
            </div>
            <div class="resume_item resume_skills">
              <div class="resume_title">Skills</div>
              <div class="resume_info">
                <div class="skills_list">
                  <div class="skills_left">HTML</div>
                  <div class="skills_bar">
                    <p>
                      <span style={{ width: "90%" }}></span>
                    </p>
                  </div>
                </div>
                <div class="skills_list">
                  <div class="skills_left">CSS</div>
                  <div class="skills_bar">
                    <p>
                      <span style={{ width: "80%" }}></span>
                    </p>
                  </div>
                </div>
                <div class="skills_list">
                  <div class="skills_left">NodeJS</div>
                  <div class="skills_bar">
                    <p>
                      <span style={{ width: "80%" }}></span>
                    </p>
                  </div>
                </div>
                <div class="skills_list">
                  <div class="skills_left">React</div>
                  <div class="skills_bar">
                    <p>
                      <span style={{ width: "60%" }}></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="resume_right">
          <div class="resume_item resume_namerole">
            <div class="name">Ashish Basnet</div>
            <div class="role">Full Stack Developer</div>
          </div>
          <div class="resume_item resume_education">
            <div class="resume_title">Education</div>
            <div class="resume_info">
              <div class="resume_data">
                <div class="year">2015</div>
                <div class="content">
                  <p className="title">SLC</p>
                  <p>
                   School: Shree JanaJyoti H.S. School, Lalbandi-Sarlahi<br/>
				   University/Board: Government of Nepal
                  </p>
                </div>
              </div>
              <div class="resume_data">
                <div class="year">2015 - 2017</div>
                <div class="content">
                  <p className="title">Intermediate(+2)</p>
                  <p>
                    School: National School of Sciences, Lainchour-Kathmandu<br/>
					Stream: Science<br/>
					University/Board: National Examination Board
                  </p>
                </div>
              </div>
              <div class="resume_data">
                <div class="year">2017 - Present</div>
                <div class="content">
                  <p className="title">BSc. CSIT</p>
                  <p>
                    College: St. Xavier's College, Maitighar-Kathmandu<br/>
					University/Board: Tribhuwan Univeresity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="resume_item resume_experience">
            <div class="resume_title">Experience</div>
            <div class="resume_info">
              <div class="resume_data">
                <div class="year">2021 - Present</div>
                <div class="content">
                  <p className="title">Software Engineer Internship</p>
                  <p>
                    Company: Optimum Futurist<br/>
					Roles: Developing application  using React and NodeJS
					Location: Thapagaun, New Baneshwor, Kathmandu Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="resume_item resmue_interests">
            <div class="resume_title">Interests</div>
            <div class="resume_info">
              <div class="interests">
                <div class="int_icon">
                  <i class="fa fa-table-tennis"></i>
                </div>
                <div class="int_data">Table Tennis</div>
              </div>
              <div class="interests">
                <div class="int_icon">
                  <i class="fa fa-book-open"></i>
                </div>
                <div class="int_data">Reading</div>
              </div>
              <div class="interests">
                <div class="int_icon">
                  <i class="fa fa-film"></i>
                </div>
                <div class="int_data">Movies</div>
              </div>
              <div class="interests">
                <div class="int_icon">
				<i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div class="int_data">Writing</div>
              </div>
            </div>
          </div>
		  <div class="resume_item resmue_interests">
            <div class="resume_title">Get Connected  With Me Here</div>
            <div class="resume_info">
              <div class="interests">
                <div class="int_icon">
				
                  <i class="fa fa-facebook"></i>
                </div>
				<a href='https://www.facebook.com/' target="_blank" rel="noreferrer">
                <div class="int_data">Facebook</div></a>
              </div>
              <div class="interests">
                <div class="int_icon">
                  <i class="fa fa-instagram"></i>
                </div>
				<a href='https://www.instagram.com/xhetryashish/' target="_blank" rel="noreferrer">
                <div class="int_data">Instagram</div></a>
              </div>
              <div class="interests">
                <div class="int_icon">
                  <i class="fa fa-linkedin"></i>
                </div>
                <a href='https://www.linkedin.com/in/ashishbasnet/' target="_blank" rel="noreferrer">
                <div class="int_data">LinkedIn</div></a>
              </div>
              <div class="interests">
                <div class="int_icon">
				<i class="fa fa-github"></i>
                </div>
                <a href='https://www.github.com/xhetry-ashish/' target="_blank" rel="noreferrer">
                <div class="int_data">Github</div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
