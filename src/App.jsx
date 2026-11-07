import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />

      <footer>
        <p>© 2026 My Portfolio. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;