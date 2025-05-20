import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaHeart, FaFilm, FaSun, FaMoon } from "react-icons/fa";
import "../css/Navbar.css";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaFilm className="brand-icon" />
        <NavLink to="/" className="brand-title">
          CineInsight
        </NavLink>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className="nav-link" activeclassname="active">
          <FaHome className="nav-icon" />
          Home
        </NavLink>
        <NavLink to="/favorites" className="nav-link" activeclassname="active">
          <FaHeart className="nav-icon" />
          Favorites
        </NavLink>

        {/* Toggle Theme Button */}
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
