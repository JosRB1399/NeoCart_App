import { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Footer from "./components/Footer"; 
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
  <div className="home-page">
    <header className="header-bar">
      <h1 className="header-title">🛍️ NeoCart</h1>
      <div className="header-cart">
        <ShoppingCart />
      </div>
    </header>

    <div className="welcome">
      <h2>Bienvenido a NeoCart</h2>
      <p>Explora nuestra colección exclusiva de tecnología y accesorios al mejor precio 💻📱</p>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Cambiar a Modo Claro' : '🌙 Cambiar a Modo Oscuro'}
      </button>
    </div>

    <ProductList />
    <Footer />
  </div>
);
}

export default App;