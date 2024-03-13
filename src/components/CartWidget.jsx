// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="material-icons">shopping_cart</i>
      <span className="cart-notification">3</span> {/* Número hardcodeado */}
    </div>
  );
}

export default CartWidget;
