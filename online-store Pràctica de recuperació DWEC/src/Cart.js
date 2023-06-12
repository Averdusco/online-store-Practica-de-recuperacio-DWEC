import React from "react";

function Cart({ products, removeFromCart }) {
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button type="button" onClick={() => removeFromCart(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
