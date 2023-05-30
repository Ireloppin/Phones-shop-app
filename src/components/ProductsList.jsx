import React, { useContext } from 'react'
import { FilteredContext } from '../context/filters';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const ProductsList = () => {
  const {filtered, setFiltered}= useContext(FilteredContext);

  return (
    <div>
        <Products>
    <Ul>
      {filtered.length <=0 ? 'No hay resultados para esta búsqueda':
      filtered.slice(0, 20).map(product =>(

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

