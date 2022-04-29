import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/header";
import Projects from "../ProjectCard/projects";
import Contact from "../../pages/Contact/contact";
import Resume from "../../pages/Resume/resume";
import Services from "../../pages/Services/services";
import Profile from "../Profile/profile";
import { profileData } from "../../utils/Constants/profile";
import { headerData } from "../../utils/Constants/header";
import Footer from "../Footer/footer";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header data={headerData["profile-1"]} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                <Profile data={profileData["profile-1"]} />
              </div>
            }
          ></Route>
          <Route
            path="/home"
            element={<Profile data={profileData["profile-1"]} />}
          />
          <Route
            path="/project"
            element={
              <div>
                <Projects />
                <Footer />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div>
                <Services />
                <Footer />
              </div>
            }
          />
          <Route
            path="/resume"
            element={
              <div>
                <Resume />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
