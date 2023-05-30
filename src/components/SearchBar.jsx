import React, { useEffect, useState } from 'react';
import {products as initialsProducts } from '../mocks/productsData.json';
import { Product } from '../model/product';

const SearchBar = () => {
    const products = initialsProducts.map(product=> {return new Product({
        id: product.id,
        brand: product.brand,
        model: product.model,
        price: product.price,
        imageUrl: product.imgUrl,
    })});

    const [filter, setFilter]= useState('')
    const [filterProducts, setFilterProducts]= useState([])



    useEffect(()=>{
        console.log(filter)
        /* const newProducts = products.filter(producto =>{
           
        })
        setFilterProducts(newProducts)
        console.log(filterProducts) 

        
        const filteredProductList = productList.filter((product) => 
        product.brand.toLowerCase().includes(search.toLowerCase()) 
        ||
        product.model.toLowerCase().includes(search.toLowerCase())
    );
        
        
        */
    }, [filter])

  return (
    <div>
        <form>
            <label htmlFor="search">Filter by</label>
            <input type="test" id="search" onChange={(e)=> setFilter(e.target.value)}></input>
        </form>
    </div>
  )
}

export default SearchBar