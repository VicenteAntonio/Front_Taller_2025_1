import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Books from '../books/Books';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

function Routing() {
  return(
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={'/books'} element={<Books/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  ) 
}

export default Routing;