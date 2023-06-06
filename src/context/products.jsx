import { createContext, useState, useEffect } from "react";
import { ProductsDataUseCase } from "../usecases/all-products.usecase";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  async function getData() {
    const data = await ProductsDataUseCase.execute();
    setProducts(data);
    setFiltered(data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, filtered, setFiltered }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
