// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="mt-5">{greeting}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
