import { createContext, useState } from "react";
import { products as initialsProducts } from '../mocks/productsData.json'
import { Product } from "../model/product";


export const ProductsContext = createContext();

export function ProductsProvider({children}){

    const formattedProducts = initialsProducts.map(product=> {return new Product({
        id: product.id,
        brand: product.brand,
        model: product.model,
        price: product.price,
        imageUrl: product.imgUrl,
    })});
    const [products, setProducts]= useState(formattedProducts);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}