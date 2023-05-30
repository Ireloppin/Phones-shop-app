import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {
  return (

    <Container>
     
        <H1><a href="/">Phone Shop</a></H1>
 
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