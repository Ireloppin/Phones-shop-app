import React from "react";
import { FilteredProvider } from "../context/filters";
import SearchBar from "./SearchBar";
import ProductsList from "./ProductsList";
import CartCounter from "./CartCounter";
import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";

const ProductsHome = () => {
  return (
    <div>
      <FilteredProvider>
        <Breadcrumbs />
        <Container>
          <CartCounter />
          <SearchBar />
        </Container>
        <ProductsList />
      </FilteredProvider>
    </div>
  );
};

export default ProductsHome;

const Container = styled.section`
  background-color: #9ba4b5;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    gap: 0;
    justify-content: space-around;
  }
`;
