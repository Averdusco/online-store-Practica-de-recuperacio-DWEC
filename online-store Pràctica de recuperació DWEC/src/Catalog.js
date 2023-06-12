import React from "react";

function Catalog({ addToCart }) {
  return (
    <div>
      <h2>Catálogo de productos</h2>
      <ul>
        <li>
          Producto 1 - $10
          <button
            type="button"
            onClick={() => addToCart({ name: "Producto 1", price: 10 })}
          >
            Agregar al carrito
          </button>
        </li>
        <li>
          Producto 2 - $20
          <button
            type="button"
            onClick={() => addToCart({ name: "Producto 2", price: 20 })}
          >
            Agregar al carrito
          </button>
        </li>
        <li>
          Producto 3 - $30
          <button
            type="button"
            onClick={() => addToCart({ name: "Producto 3", price: 30 })}
          >
            Agregar al carrito
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Catalog;
