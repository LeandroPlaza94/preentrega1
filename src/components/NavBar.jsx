// src/components/NavBar.jsx
import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">MiTienda</a>
        <ul className="right">
          <li><a href="#!">Categoría 1</a></li>
          <li><a href="#!">Categoría 2</a></li>
          {/* Agrega más categorías si es necesario */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
