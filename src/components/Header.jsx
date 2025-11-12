import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import './ShoppingCart.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <header>
      <div className="header-content">
        {/* 🛍️ Logo o título */}
        <h1 className="logo-title">🛍️ NeoCart</h1>

        {/* 🛒 Carrito + Botón modo oscuro */}
        <div className="header-right">
          <div className="cart-indicator">
            <ShoppingCart size={26} color="#333" />
            {items.length > 0 && (
              <span className="cart-count">{items.length}</span>
            )}
          </div>

          <button className="toggle-btn" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
