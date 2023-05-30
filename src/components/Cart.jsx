import React, { useContext } from "react";
import { CartContext } from "../context/cart";

const Cart = () => {
  const { selectedProducts, setSelectedProducts } = useContext(CartContext);
  let total = 0;
  selectedProducts.map((item) => {
    total += Number(item.price * item.quantity);
  });

  const handleDelete = (id) => {
    const updatedProducts = selectedProducts.filter((item) => item.id !== id);
    setSelectedProducts(updatedProducts);
  };
  return (
    <>
      <h1>Cart</h1>
      <p>Products in cart: {selectedProducts.length}</p>
      <table>
        {selectedProducts.length <= 0
          ? "No hay nada en el carrito"
          : selectedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.model}</td>
                <td>{product.brand}</td>
                <td>{product.price}€</td>
                <td>{product.quantity}Uds</td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
      </table>
      <h3>Total: {total}€</h3>
    </>
  );
};

export default Cart;
