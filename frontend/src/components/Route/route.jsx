import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../Header/header'; 
import Projects from '../ProjectCard/projects';
import Contact from '../../pages/Contact/contact';
import Resume from '../../pages/Resume/resume';
import Testimonial from '../../pages/Testimonial/testimonial'
import Profile from '../Profile/profile';
import {profileData} from '../../utils/Constants/profile'
import {headerData} from '../../utils/Constants/header'

function route() {
  return (
    <div>
        <BrowserRouter>
      <Header data={headerData['profile-1']}/>
      <Routes>
        <Route path="/" exact element={<Profile data={profileData['profile-1']}/>}/>
        <Route path="/home" element={<Profile data={profileData['profile-1']} />}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default route