import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Pages/Home";
import Company from "./components/Pages/Company";
import Contact from "./components/Pages/Contact";
import NewProject from "./components/Pages/NewProject";
import Projects from "./components/Pages/Pojects";

import Container from "./components/layout/Container";

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
