import Header from './components/Header/header';
import Main from './components/MainContent/main';
import Projects from './components/projectCard/projects';
import Contact from './pages/Contact/contact';
import Resume from './pages/Resume/resume';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/home" element={<Main/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
