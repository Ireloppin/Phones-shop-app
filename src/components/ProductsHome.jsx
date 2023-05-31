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
        <Container>
          <Breadcrumbs />
          <CartCounter />
        </Container>
        <SearchBar />
        <ProductsList />
      </FilteredProvider>
    </div>
  );
};

export default ProductsHome;

const Container = styled.section`
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
