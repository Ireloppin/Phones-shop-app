import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../context/products";
import { singleProduct } from "../mocks/singleProduct.json";
import { CartContext } from "../context/cart";
import styled from "styled-components";

const ProductDetail = () => {
  const { selectedProducts, setSelectedProducts } = useContext(CartContext);
  const data = useParams();
  const { products } = useContext(ProductsContext);
  const selectedProduct = products.filter((item) => item.id === data.id);
  const handleAddToCart = (id) => {
    const newSelected = products.filter((item) => item.id === id);
    const updatedSelected = { ...newSelected[0], quantity: 1 };
    const productInCart = selectedProducts.findIndex((item) => item.id === id);
    if (productInCart >= 0) {
      const newCart = structuredClone(selectedProducts);
      newCart[productInCart].quantity += 1;
      setSelectedProducts(newCart);
    } else {
      setSelectedProducts([...selectedProducts, updatedSelected]);
    }
  };

  return (
    <>
      <Button>
        <Link to={"/"}>Back to all Products</Link>
      </Button>
      <Container>
        <Img
          src="https://i.dummyjson.com/data/products/2/1.jpg"
          alt={singleProduct.model}
        ></Img>
        <section>
          <Div>
            <H3>{selectedProduct[0].model}</H3>
            <H3>Brand: {selectedProduct[0].brand}</H3>
            <H3>Price: {selectedProduct[0].price}€</H3>
            <P>CPU: {singleProduct.cpu}</P>
            <P>RAM: {singleProduct.ram}</P>
            <P>OS: {singleProduct.os[0]}</P>
            <P>Display Resolution: {singleProduct.displayResolution}</P>
            <P>Battery: {singleProduct.battery}</P>
            <P>
              Cameras:
              <span>Primary Camera: {singleProduct.primaryCamera}</span>
              <span>Second Camera: {singleProduct.secondaryCmera}</span>
            </P>
            <P>Dimentions: {singleProduct.dimentions}</P>
            <P>Weight: {singleProduct.weight}</P>
          </Div>
          <Div>
            <H3>Select your favorites options</H3>
            <Select>
              {singleProduct.options.colors.map((option) => (
                <option key={option.code}>{option.name}</option>
              ))}
            </Select>
            <Select>
              {singleProduct.options.storages.map((option) => (
                <option key={option.code}>{option.name}</option>
              ))}
            </Select>
            <Button onClick={() => handleAddToCart(selectedProduct[0].id)}>
              <Link to={"/"}>Add to Cart</Link>
            </Button>
          </Div>
        </section>
      </Container>
    </>
  );
};

export default ProductDetail;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  align-items: flex-start;
  margin-top: 2rem;
`;
const H3 = styled.h3`
  margin: 0.8rem 0;
  color: #212a3e;
`;
const P = styled.p`
  margin: 0.5rem 0;
  color: #212a3e;
`;
const Img = styled.img`
  max-width: 100%;
  border-radius: 1rem;
`;

const Div = styled.div`
  background-color: whitesmoke;
  border: solid 3px #9ba4b5;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

const Select = styled.select`
  margin-bottom: 0.8rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: #9ba4b5;
  color: whitesmoke;

  &:hover {
    background-color: whitesmoke;
    color: #212a3e;
  }
`;
