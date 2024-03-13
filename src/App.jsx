// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import './App.css'; // Importa los estilos CSS para la aplicación

const App = () => {
  return (
    <div className="app-container"> {/* Agrega una clase para el contenedor de la aplicación */}
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
