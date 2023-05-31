import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../context/products";
import { FilteredContext } from "../context/filters";
import useFilter from "../hooks/useFilter";
import styled from "styled-components";

const SearchBar = () => {
  const { products } = useContext(ProductsContext);
  const { setFiltered } = useContext(FilteredContext);
  const [filter, setFilter] = useState("");
  const { filterProducts } = useFilter();

  useEffect(() => {
    filterProducts({ filter });
  }, [filter]);

  const handleReset = () => {
    setFilter("");
    setFiltered(products);
  };

  return (
    <Container>
      <Form>
        <Label htmlFor="search">Filter by</Label>
        <Input
          type="test"
          id="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></Input>
      </Form>
      <Button onClick={handleReset}>Reset Filter</Button>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  background-color: #9ba4b5;
  border-radius: 1rem;
  padding: 0 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  max-width: 70%;
  margin: 1rem auto;
`;

const Label = styled.label`
  font-size: 1.5rem;
  color: whitesmoke;
  margin-right: 1rem;
`;

const Form = styled.form`
  padding: 1rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  @media (max-width: 820px) {
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  @media (max-width: 820px) {
    margin-bottom: 1rem;
  }
`;
