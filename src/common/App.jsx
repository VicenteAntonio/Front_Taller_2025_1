import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [recommendations, setRecommendations] = useState([
    { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', image: '📕' },
    { id: 2, title: 'El principito', author: 'Antoine de Saint-Exupéry', image: '📘' },
    { id: 3, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', image: '📙' },
  ]);

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add('visible');
        }, index * 300);
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-container ${isVisible ? 'visible' : ''}`}>
      <div className="hero-section animate-section">
        <h1 className="app-title">📚 Biblioteca Virtual</h1>
        <p className="app-description">Explora nuestra colección de libros digitales y encuentra tu próxima lectura favorita.</p>
        <Link to='/books' className="explore-button">
          Explorar Catálogo
          <span className="arrow-icon">→</span>
        </Link>
      </div>
      
      <div className="features-section animate-section">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Búsqueda Inteligente</h3>
          <p>Encuentra rápidamente los libros que buscas</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Mejores Precios</h3>
          <p>Ofertas exclusivas todos los días</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Envío Rápido</h3>
          <p>Recibe tus libros favoritos en tiempo récord</p>
        </div>
      </div>
      
      <div className="recommendations-section animate-section">
        <h2 className="section-title">Recomendados para ti</h2>
        <p className="section-subtitle">Basado en tus intereses y lecturas anteriores</p>
        
        <div className="recommendations-list">
          {recommendations.map(book => (
            <div className="recommendation-item" key={book.id}>
              <div className="book-cover">{book.image}</div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Link to="/books" className="view-all-button">
          Ver todas las recomendaciones
          <span className="arrow-icon small">→</span>
        </Link>
      </div>
      
      <div className="promotion-section animate-section">
        <div className="promotion-content">
          <h2 className="promotion-title">¡Oferta Especial!</h2>
          <p className="promotion-text">Obtén un 20% de descuento en tu primera compra</p>
          <button className="promotion-button">Obtener Cupón</button>
        </div>
        <div className="promotion-image">📚</div>
      </div>
    </div>
  )
}

export default App
