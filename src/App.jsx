import React from "react";
import "./App.css";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { ProductsProvider } from "./context/products";
import { FilteredProvider } from "./context/filters";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsProvider>
        <FilteredProvider>
        <SearchBar/>
      <ProductsList />
      </FilteredProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;