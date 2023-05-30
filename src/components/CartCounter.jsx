import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { Link } from "react-router-dom";

const CartCounter = () => {
  const { selectedProducts } = useContext(CartContext);
  console.log(selectedProducts);
  return (
    <>
      <Link to={"/cart/"}>See cart</Link>
      <p>Products in cart: {selectedProducts.length}</p>
    </>
  );
};

export default CartCounter;
