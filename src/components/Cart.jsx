import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import styled from "styled-components";

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
      <h2>Cart</h2>
      <H3>Products in cart: {selectedProducts.length}</H3>
      <Table>
        {selectedProducts.length <= 0
          ? "No hay nada en el carrito"
          : selectedProducts.map((product) => (
              <tr key={product.id}>
                <Td>{product.model}</Td>
                <Td>{product.brand}</Td>
                <Td>{product.price}€</Td>
                <Td>{product.quantity}Uds</Td>
                <Td>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </Td>
              </tr>
            ))}
      </Table>
      <h3>Total: {total}€</h3>
    </>
  );
};

export default Cart;

const H3 = styled.h3`
  margin: 0.8rem 0;
  color: #212a3e;
`;

const Table = styled.table`
  background-color: #9ba4b5;
  margin: 2rem 0;
`;

const Td = styled.td`
  padding: 1rem;
`;
