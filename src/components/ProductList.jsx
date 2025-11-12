import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice.js';
import { addToCart } from '../store/cartSlice.js';
import '../index.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p style={{ textAlign: 'center' }}>🕐 Cargando productos...</p>;
  if (status === 'failed') return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <section>
      <h2 style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '1.6rem' }}>🛒 Nuestros Productos</h2>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p style={{ fontWeight: 500 }}>S/ {product.price}</p>
            <button onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}>
              Agregar al carrito 🛍️
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
