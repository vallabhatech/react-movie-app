import { Link } from "react-router-dom";
import "../css/Navbar.css"; // <-- Fix import to match filename

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎬 MovieApp</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
