import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Biblioteca Virtual</h3>
          <p className="footer-description">
            Tu destino para descubrir y disfrutar de una amplia colección de libros digitales.
            Explora nuestro catálogo y encuentra tu próxima aventura literaria.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces</h4>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/books">Libros</a></li>
            <li><a href="#">Categorías</a></li>
            <li><a href="#">Ofertas</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Soporte</h4>
          <ul className="footer-links">
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Ayuda</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Políticas de privacidad</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Suscríbete</h4>
          <p>Recibe nuestras novedades y ofertas exclusivas</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Tu correo electrónico" />
            <button className="subscribe-button">Suscribir</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Biblioteca Virtual. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer; 