import React, { useState } from "react";

function OrderForm({ submitOrder }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      name,
      address
    };

    submitOrder(order);

    setName("");
    setAddress("");
  };

  return (
    <div>
      <h2>Formulario de pedido</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />

        <input type="submit" value="Realizar pedido" />
      </form>
    </div>
  );
}

export default OrderForm;
