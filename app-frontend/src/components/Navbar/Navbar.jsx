import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="text">
        <ul>
          <Link to="/login">Autentificare</Link>
          <Link to="/register">Înregistrare</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
