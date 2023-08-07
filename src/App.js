import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// footer component import
import Footer from "./components/Footer";
// page imports
import About from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Victor Mora</h1>
          <NavLink to="/">About</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="resume">Resume</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/React-Me" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;