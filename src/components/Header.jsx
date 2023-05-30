import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <H1>
        <a href="/">Phone Shop</a>
      </H1>
    </Container>
  );
};

export default Header;

const H1 = styled.h1`
  color: whitesmoke;
`;
const Container = styled.header`
  margin: 0 auto;
  padding: 4rem 0;
`;
