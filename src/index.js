import React, { useState } from "react";
import ReactDOM from "react-dom";
import Catalog from "./Catalog";
import Cart from "./Cart";
import OrderForm from "./OrderForm";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log(`Producto ${product.name} agregado al carrito`);
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const submitOrder = (order) => {
    console.log("Orden enviada:", order);
  };

  return (
    <div>
      <h1>Tienda en línea</h1>

      <Catalog addToCart={addToCart} />

      <Cart products={cartItems} removeFromCart={removeFromCart} />

      <OrderForm submitOrder={submitOrder} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
