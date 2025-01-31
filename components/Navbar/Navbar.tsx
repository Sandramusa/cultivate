import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logos/logo-white.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Obtener la ruta actual

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="container-fluid" id="navbar">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="navbar d-flex align-items-center navbar-h">
            <div className="navbar-logo">
              <img src={logo} alt="Cultivate Logo" />
            </div>
            {/* Botón menú hamburguesa */}
            <button className="hamburger-menu" onClick={toggleMenu}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>

            {/* Enlaces de navegación */}
            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
              <a href="/" className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}>Home</a>
              <a href="/course" className={`navbar-link ${location.pathname === "/course" ? "active" : ""}`}>Cursos</a>
              <a href="/repository" className={`navbar-link ${location.pathname === "/repository" ? "active" : ""}`}>Repositorio</a>
              <a href="/news" className={`navbar-link ${location.pathname === "/news" ? "active" : ""}`}>Noticias</a>
              <a href="/tools" className={`navbar-link ${location.pathname === "/tools" ? "active" : ""}`}>Herramientas</a>
              <a href="/activities" className={`navbar-link ${location.pathname === "/activities" ? "active" : ""}`}>Actividades</a>
              <a href="/contact" className={`contacto-button ${location.pathname === "/contact" ? "active" : ""}`}>Contacto</a>
            </div>
          </div>
        </div>
      </div>

      {/* Menú lateral móvil */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <button className="close-button" onClick={closeMenu}>&times;</button>
          </div>
        </div>
        <div className="navbar-links">
          <a href="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>Home</a>
          <a href="/course" className={location.pathname === "/course" ? "active" : ""} onClick={closeMenu}>Cursos</a>
          <a href="/repository" className={location.pathname === "/repository" ? "active" : ""} onClick={closeMenu}>Repositorio</a>
          <a href="/news" className={location.pathname === "/news" ? "active" : ""} onClick={closeMenu}>Noticias</a>
          <a href="/tools" className={location.pathname === "/tools" ? "active" : ""} onClick={closeMenu}>Herramientas</a>
          <a href="/activities" className={location.pathname === "/activities" ? "active" : ""} onClick={closeMenu}>Actividades</a>
          <a href="/contact" className={`contacto-button ${location.pathname === "/contact" ? "active" : ""}`} onClick={closeMenu}>Contacto</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
