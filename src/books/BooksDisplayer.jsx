import React, { useState } from 'react';
import './BooksDisplayer.css';

function BookDisplayer({ name, author, price }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Genera un color aleatorio basado en el nombre del libro
  const generateBookColor = (bookName) => {
    const colors = [
      '#4b6cb7', '#0082c8', '#667eea', '#764ba2', '#6B8DD6',
      '#8E37D7', '#5E5AEC', '#3F51B5', '#4A00E0'
    ];
    
    const index = bookName.length % colors.length;
    return colors[index];
  };
  
  const bookColor = generateBookColor(name);
  
  return (
    <div 
      className={`container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="book-badge">Nuevo</div>
      <div className="book-content">
        <div className="book-icon" style={{ backgroundColor: bookColor }}>
          <span>{name.substring(0, 1).toUpperCase()}</span>
        </div>
        <h2 className="title">{name}</h2>
        <h3 className="author">
          <span className="author-icon">✍️</span> {author}
        </h3>
        <div className="book-rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star half">★</span>
          <span className="rating-count">(42)</span>
        </div>
        <div className="details">
          <p className="price">{price}</p>
          <button className="details-button">Ver detalles</button>
        </div>
      </div>
      {isHovered && (
        <div className="quick-actions">
          <button className="action-button">
            <span className="action-icon">🛒</span>
          </button>
          <button className="action-button">
            <span className="action-icon">❤️</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default BookDisplayer;