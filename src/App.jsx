import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Impressum from "./components/pages/Impressum/Impressum";
import Privacy from "./components/pages/Privacy/Privacy";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer>
          <Link to="/impressum">Impressum</Link>
          <Link to="/privacy">Privacy</Link>
        </footer>
      </>
    </Router>
  );
}

export default App;
