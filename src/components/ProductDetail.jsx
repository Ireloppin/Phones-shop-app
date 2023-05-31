import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../context/products";
import { singleProduct } from "../mocks/singleProduct.json";
import styled from "styled-components";
import useCart from "../hooks/useCart";
import Header from "./Header";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const data = useParams();
  const { products } = useContext(ProductsContext);
  const selectedProduct = products.filter((item) => item.id === data.id);
  const [options, setOptions] = useState({
    color: singleProduct.options.colors[0].name,
    storage: singleProduct.options.storages[0].name,
  });
  return (
    <>
      <Header />
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
            <Select
              onChange={(e) =>
                setOptions({ ...options, color: e.target.value })
              }
            >
              {singleProduct.options.colors.map((option) => (
                <option key={option.code} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Select>
            <Select
              onChange={(e) =>
                setOptions({ ...options, storage: e.target.value })
              }
            >
              {singleProduct.options.storages.map((option) => (
                <option value={option.name} key={option.code}>
                  {option.name}
                </option>
              ))}
            </Select>
            <Button
              id="add-to-cart-button"
              onClick={() => addToCart(selectedProduct[0].id, options)}
            >
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
  margin-top: 1rem;

  &:hover {
    background-color: whitesmoke;
    color: #212a3e;
  }
`;
