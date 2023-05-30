import React from "react";
import "./App.css";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { ProductsProvider } from "./context/products";
import { FilteredProvider } from "./context/filters";
import { Router } from "./router";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsProvider>
        <FilteredProvider>
        <SearchBar/>
      <Router/>
      </FilteredProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;