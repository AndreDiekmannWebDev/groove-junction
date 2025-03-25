import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/impressum">Impressum</Link>
      <Link to="/privacy">Privacy</Link>
    </footer>
  );
}

export default Footer;
