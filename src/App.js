import Header from './components/Header/header';
import Main from './pages/HomePage/main';
import Projects from './components/ProjectCard/projects';
import Contact from './pages/Contact/contact';
import Resume from './pages/Resume/resume';
import Testimonial from './pages/Testimonial/testimonial'
import{BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/home" element={<Main/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
