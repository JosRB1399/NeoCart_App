import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCart as CartIcon } from 'lucide-react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const items = useSelector((state) => state.cart.items);

  // 🔹 Calcula la cantidad total sumando las cantidades de cada producto
  const totalItems = items.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div className="cart-container">
      <CartIcon className="cart-icon" size={26} />
      <span className="cart-text">Mi Carrito</span>
      <span className="cart-badge">{totalItems}</span>
    </div>
  );
};

export default ShoppingCart;
