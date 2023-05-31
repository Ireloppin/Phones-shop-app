import React, { useContext } from "react";
import { ProductsContext } from "../context/products";
import { CartContext } from "../context/cart";

const useCart = () => {
  const { selectedProducts, setSelectedProducts } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const addToCart = (id, options) => {
    const newSelected = products.filter((item) => item.id === id);

    const updatedSelected = {
      ...newSelected[0],
      id: newSelected[0].model + options.color + options.storage,
      quantity: 1,
      options,
    };
    const productInCart = selectedProducts.findIndex(
      (item) => item.id === updatedSelected.id
    );
    if (productInCart >= 0) {
      const newCart = structuredClone(selectedProducts);
      newCart[productInCart].quantity += 1;
      setSelectedProducts(newCart);
    } else {
      setSelectedProducts([...selectedProducts, updatedSelected]);
    }
  };

  const deleteFromCart = (id) => {
    const updatedProducts = selectedProducts.filter((item) => item.id !== id);
    setSelectedProducts(updatedProducts);
  };

  return { addToCart, deleteFromCart };
};

export default useCart;
