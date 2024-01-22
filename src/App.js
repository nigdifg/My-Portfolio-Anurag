
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import './index.css';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Element>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Works />
    <Contact />
    </Element>
    </div>
  );
}

export default App;
