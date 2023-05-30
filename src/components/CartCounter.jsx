import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { Link } from "react-router-dom";

const CartCounter = () => {
  const { selectedProducts } = useContext(CartContext);
  console.log(selectedProducts);

  let totalProducts = 0;
  selectedProducts.map((item) => {
    totalProducts += Number(item.quantity);
  });
  return (
    <>
      <Link to={"/cart/"}>See cart</Link>
      <p>Products in cart: {totalProducts}</p>
    </>
  );
};

export default CartCounter;
