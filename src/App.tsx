import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import { Home } from './screens/Home';
import { About } from './components/About';
import { MyMusics } from './components/MyMusics';
import { SocialLinks } from './components/SocialLinks';
import { Contact } from './screens/Contact';


function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink><br></br>
          <NavLink to="/about">About</NavLink><br></br>
          <NavLink to="/mymusics">MyMusics</NavLink><br></br>
          <NavLink to="/sociallinks">SocialLinks</NavLink><br></br>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mymusics" element={<MyMusics id="AUh9xVoyqvk" />} />
        <Route path="/mymusics" element={<MyMusics id="5BENMWsG7ks" />} />
        <Route path="/sociallinks" element={<SocialLinks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>© 2021 Loïc Ghijselings</p>
      </footer>
    </div>
  );
}

export default App;


