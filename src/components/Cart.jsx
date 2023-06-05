import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import Header from "./Header";

const Cart = () => {
  const { deleteFromCart } = useCart();
  const { selectedProducts } = useContext(CartContext);
  let total = 0;
  selectedProducts.map((item) => {
    total += Number(item.price * item.quantity);
  });
  let totalProducts = 0;
  selectedProducts.map((item) => {
    totalProducts += Number(item.quantity);
  });

  return (
    <>
      <Header />
      <Button>
        <Link to={"/"}>Back to all Products</Link>
      </Button>
      <H3>Products in cart: {totalProducts}</H3>
      <Table>
        {selectedProducts.length <= 0
          ? "Cart is empty"
          : selectedProducts.map((product) => (
              <Tr key={product.id}>
                <Td>{product.model}</Td>
                <Td>{product.brand}</Td>
                <Td>{product.price}€</Td>
                <Td>Color: {product.options.color}</Td>
                <Td>Storage: {product.options.storage}</Td>
                <Td>{product.quantity}Uds</Td>
                <Td>
                  <Button onClick={() => deleteFromCart(product.id)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
      </Table>
      <h3>Total: {total}€</h3>
    </>
  );
};

export default Cart;

const LinksContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 500px) {
    margin-bottom: 2rem;
  }
`;
const Button = styled.button`
  background-color: #9ba4b5;
  color: whitesmoke;

  &:hover {
    background-color: whitesmoke;
    color: #212a3e;
  }
`;

const H3 = styled.h3`
  margin: 2rem 0;
  color: #212a3e;
`;

const Table = styled.table`
  border: solid 3px #9ba4b5;
  margin: 2rem 0;
`;

const Tr = styled.tr`
  border: solid 3px #9ba4b5;
`;

const Td = styled.td`
  padding: 1rem;
`;
