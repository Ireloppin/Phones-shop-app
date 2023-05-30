import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartCounter = () => {
  const { selectedProducts } = useContext(CartContext);
  console.log(selectedProducts);

  let totalProducts = 0;
  selectedProducts.map((item) => {
    totalProducts += Number(item.quantity);
  });
  return (
    <Link to={"/cart/"}>
      <Container>
        <H3> See cart </H3>
        <H4>Products in cart: {totalProducts}</H4>
      </Container>
    </Link>
  );
};

export default CartCounter;

const Container = styled.div`
  border: solid 3px #9ba4b5;
  background-color: #9ba4b5;
  padding: 0 2rem;
  border-radius: 1rem;
`;
const H3 = styled.h3`
  margin: 1rem 0;
  color: whitesmoke;
`;
const H4 = styled.h4`
  margin-bottom: 1rem;
  color: whitesmoke;
`;
