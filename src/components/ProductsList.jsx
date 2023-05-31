import React, { useContext } from "react";
import { FilteredContext } from "../context/filters";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const ProductsList = () => {
  const { filtered, setFiltered } = useContext(FilteredContext);

  return (
    <>
      <Products>
        <Ul>
          {filtered.length <= 0 ? (
            <P>"No results for this search"</P>
          ) : (
            filtered
              .slice(0, 20)
              .map((product) => (
                <ProductItem product={product} key={product.id} />
              ))
          )}
        </Ul>
      </Products>
    </>
  );
};

export default ProductsList;

const Products = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

const P = styled.p`
  font-size: 2rem;
  grid-column: 1/4;
  margin-top: 2rem;
`;
