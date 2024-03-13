// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
  
}

export default App;
