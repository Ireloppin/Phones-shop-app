import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartCounter = () => {
  const { selectedProducts } = useContext(CartContext);

  let totalProducts = 0;
  selectedProducts.map((item) => {
    totalProducts += Number(item.quantity);
  });
  return (
    <Link to={"/cart/"}>
      <Container>
        <H4>Products in cart: {totalProducts}</H4>
      </Container>
    </Link>
  );
};

export default CartCounter;

const Container = styled.div`
  border: solid 3px #9ba4b5;
  background-color: #9ba4b5;
  border-radius: 1rem;
`;

const H4 = styled.h4`
  font-size: 1.2rem;
  margin: 1rem;
  color: whitesmoke;

  @media (max-width: 500px) {
    font-size: 1rem;
    margin: 1rem;
  }
`;
