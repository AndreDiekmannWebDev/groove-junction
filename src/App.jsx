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
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
