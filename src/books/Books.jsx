import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../config";
import BookDisplayer from './BooksDisplayer';
import './Books.css';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/books`);
      setBooks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al cargar los libros:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return(
    <div className="books-page">
      <div className="books-header">
        <h1 className="books-title">Nuestra Colección de Libros</h1>
        <p className="books-subtitle">Explora nuestro catálogo completo de títulos disponibles</p>
      </div>
      
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando libros...</p>
        </div>
      ) : (
        <div className="books-grid">
          {books.length > 0 ? (
            books.map((book, index) => (
              <BookDisplayer 
                key={index} 
                name={book.name} 
                author={book.author} 
                price={book.price}
              />
            ))
          ) : (
            <p className="no-books-message">No hay libros disponibles en este momento</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Books;