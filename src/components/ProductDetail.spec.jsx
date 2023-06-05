import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { ProductsContext } from "../context/products";
import { CartContext } from "../context/cart";
import ProductDetail from "./ProductDetail";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

describe("ProductDetail", () => {
  it("should add product to cart on button click", async () => {
    useParams.mockReturnValue({ id: "1" });

    const mockSetSelectedProducts = jest.fn();
    const mockSelectedProducts = [];
    const mockCartContextValue = {
      selectedProducts: mockSelectedProducts,
      setSelectedProducts: mockSetSelectedProducts,
    };

    const mockProducts = [
      { id: "1", model: "iPhone", brand: "Apple", price: 999 },
      { id: "2", model: "Galaxy", brand: "Samsung", price: 899 },
    ];
    const mockProductsContextValue = { products: mockProducts };

    const { getByText, getByTestId } = render(
      <Router>
        <ProductsContext.Provider value={mockProductsContextValue}>
          <CartContext.Provider value={mockCartContextValue}>
            <ProductDetail />
          </CartContext.Provider>
        </ProductsContext.Provider>
      </Router>
    );

    const addToCartButton = screen.queryByText("Add to Cart");
    await waitFor(() => userEvent.click(addToCartButton));

    waitFor(() =>
      expect(mockSetSelectedProducts).toHaveBeenCalledWith([
        { id: "1", model: "iPhone", brand: "Apple", price: 999, quantity: 1 },
      ])
    );

    const backToProductsLink = screen.queryByText("Back to all Products");
    waitFor(() => expect(backToProductsLink).toBeInTheDocument());

    waitFor(() => expect(backToProductsLink.getAttribute("href")).toBe("/"));
  });
});
