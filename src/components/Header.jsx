import React from "react";
import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";
import CartCounter from "./CartCounter";

const Header = () => {
  return (
    <Container>
      <H1>
        <a href="/">Phone Shop</a>
      </H1>
      <LinksContainer>
        <Breadcrumbs />
        <CartCounter />
      </LinksContainer>
    </Container>
  );
};

export default Header;

const H1 = styled.h1`
  color: whitesmoke;
`;
const Container = styled.header`
  margin: 0 auto;
  padding: 4rem 0 1rem;

  @media (max-width: 500px) {
    padding: 2rem 0;
  }
`;
const LinksContainer = styled.section`
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
