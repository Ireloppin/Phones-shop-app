import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../context/products";
import { FilteredContext } from "../context/filters";
import styled from "styled-components";

const SearchBar = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { filtered, setFiltered } = useContext(FilteredContext);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const newProducts = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(filter.toLowerCase()) ||
        product.model.toLowerCase().includes(filter.toLowerCase())
    );
    setFiltered(newProducts);
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
  border: solid 3px #9ba4b5;
  background-color: #9ba4b5;
  padding: 0 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 1.5rem;
  color: whitesmoke;
  margin-right: 1rem;
`;

const Form = styled.form`
  padding: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 1rem;
`;

const Button = styled.button`
  margin-bottom: 1rem;
`;
