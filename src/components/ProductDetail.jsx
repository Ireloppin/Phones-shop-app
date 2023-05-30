import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/products";
import { singleProduct } from "../mocks/singleProduct.json";
import { CartContext } from "../context/cart";

const ProductDetail = () => {
  const { selectedProducts, setSelectedProducts } = useContext(CartContext);
  const data = useParams();
  const { products } = useContext(ProductsContext);
  const selectedProduct = products.filter((item) => item.id === data.id);
  const handleAddToCart = (id) => {
    const newSelected = products.filter((item) => item.id === id);

    setSelectedProducts([...selectedProducts, newSelected[0]]);
  };

  return (
    <div>
      <img scr={singleProduct.imgUrl} alt={singleProduct.model}></img>
      <h3>{selectedProduct[0].model}</h3>
      <h3>Brand: {selectedProduct[0].brand}</h3>
      <h3>Price: {selectedProduct[0].price}€</h3>
      <p>CPU: {singleProduct.cpu}</p>
      <p>RAM: {singleProduct.ram}</p>
      <p>OS: {singleProduct.os[0]}</p>
      <p>Display Resolution: {singleProduct.displayResolution}</p>
      <p>Battery: {singleProduct.battery}</p>
      <p>
        Cameras:
        <span>Primary Camera: {singleProduct.primaryCamera}</span>
        <span>Second Camera: {singleProduct.secondaryCmera}</span>
      </p>
      <p>Dimentions: {singleProduct.dimentions}</p>
      <p>Weight: {singleProduct.weight}</p>
      <button onClick={() => handleAddToCart(selectedProduct[0].id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
