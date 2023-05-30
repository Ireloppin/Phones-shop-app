import React, { createContext, useState } from "react";
import { products as initialsProducts } from '../mocks/productsData.json';
import { Product } from "../model/product";


export const FilteredContext =createContext()

export  function FilteredProvider ({children}){

    const formattedProducts = initialsProducts.map(product=> {return new Product({
        id: product.id,
        brand: product.brand,
        model: product.model,
        price: product.price,
        imageUrl: product.imgUrl,
    })});

    const [filtered, setFiltered]= useState(formattedProducts)
    return (
        <FilteredContext.Provider value={{
            filtered,
            setFiltered
        }}>
            {children}
        </FilteredContext.Provider>
    )
}