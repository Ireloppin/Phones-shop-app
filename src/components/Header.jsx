import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Container>
        <H1>Phone Shop</H1>
        <SearchBar/>
    </Container>
  )
}

export default Header

const H1 = styled.h1`
    font-size: 3rem;
    color: whitesmoke;

`
const Container = styled.header`
    max-width: 80%;
    margin:0 auto;
    padding: 4rem 0;
`