import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import { Home } from './screens/Home';
import { About } from './components/About';
import { MyMusics } from './components/MyMusics';
import { SocialLinks } from './components/SocialLinks';
import { Contact } from './screens/Contact';


function App() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white'}}>
      <header className='mb-5'>
        <nav className='flex justify-center items-center'>
          <NavLink className="mr-2" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/about">About</NavLink>
          <NavLink className="mr-2" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/mymusics">MyMusics</NavLink>
          <NavLink className="mr-2" to="/"><img src="img/planet.gif" alt="logo" className="w-36"></img></NavLink>
          <NavLink className="mr-2" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/sociallinks">SocialLinks</NavLink>
          <NavLink className="mr-2" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/contact">Contact</NavLink>
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

      </footer>
    </div>
  );
}

export default App;


