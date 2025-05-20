import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">Biblioteca Virtual</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/books" className="nav-link">Libros</Link>
          <a href="#" className="nav-link">Categorías</a>
          <a href="#" className="nav-link">Contacto</a>
        </div>
        
        <div className="navbar-actions">
          <div className="search-bar">
            <input type="text" placeholder="Buscar libros..." />
            <button className="search-button">🔍</button>
          </div>
          <button className="login-button">Ingresar</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 