import React from 'react';
import styled from 'styled-components';



const ProductItem = ({product}) => {

    const handleAddToCart = (id)=>{
        console.log(`product:${id} added to cart`)
    }

  return (
    <>
         <Li>
          <Img src="https://i.dummyjson.com/data/products/2/1.jpg" alt={product.id}></Img> 
            <H3> {product.model}</H3>
            <P>Brand: <Span>{product.brand}</Span></P>
            <P>Precio: <Span>{product.price}</Span>€</P>
            <button onClick={()=> handleAddToCart(product.id)}>
                Add to Cart
            </button> 
        </Li>
    </>
  )
}

export default ProductItem

const Li = styled.li`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    border-radius: 1rem;

`
const Img = styled.img`
    max-width: 12rem;
    border-radius: 1rem;
    
`

const H3 = styled.h3`
    font-size: 1.8rem;
    text-align: center;
    margin: 0.5rem;
`
const P = styled.p`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`

const Span = styled.span`
    font-size: 1.2rem;
    font-weight:700;
`