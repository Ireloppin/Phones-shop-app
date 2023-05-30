import React from 'react'
import { products as initialsProducts } from '../mocks/productsData.json'
import { Product } from '../model/product';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const ProductsList = () => {
const products = initialsProducts.map(product=> {return new Product({
    id: product.id,
    brand: product.brand,
    model: product.model,
    price: product.price,
    imageUrl: product.imgUrl,
})});

  return (
    <div>
        <Products>
    <Ul>
      {products.length <=0 ? 'No hay resultados para esta búsqueda':
      products.slice(0, 20).map(product =>(

        <ProductItem product={product} key={product.id}/>
       
    )
        ) }
    </Ul>
    </Products>

    </div>
  )
}

export default ProductsList

const Products = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

`

