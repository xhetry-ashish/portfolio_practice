import Header from './components/Header/header'; 
import Projects from './components/ProjectCard/projects';
import Contact from './pages/Contact/contact';
import Resume from './pages/Resume/resume';
import Testimonial from './pages/Testimonial/testimonial'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Profile from './components/Profile/profile';
import {profileData} from './utils/Constants/profile'
import {headerData} from './utils/Constants/header'

function App() {
  return (
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
  );
}

export default App;
