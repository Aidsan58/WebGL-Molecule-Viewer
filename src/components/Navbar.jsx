import { Link } from "react-router-dom";
import "./../Navbar.css";
import logo from "../assets/images.png";

function Navbar() {
  return (
    <header className="header">
      

      <nav className="navbar">
        <a href="/" className="logo"> <img src={logo} alt="Logo" /> </a>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/molecule-viewer">Molecule Renderer</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;