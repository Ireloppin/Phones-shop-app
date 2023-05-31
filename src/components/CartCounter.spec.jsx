import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { CartContext } from "../context/cart";
import CartCounter from "./CartCounter";

describe("CartCounter", () => {
  it("should display the correct number of products in the cart", () => {
    const mockSelectedProducts = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
    ];
    const mockCartContextValue = { selectedProducts: mockSelectedProducts };

    render(
      <Router>
        <CartContext.Provider value={mockCartContextValue}>
          <CartCounter />
        </CartContext.Provider>
      </Router>
    );

    const productsInCartText = screen.findByText("Products in cart: 5");

    waitFor(() => expect(productsInCartText).toBeInTheDocument());
    waitFor(() =>
      expect(productsInCartText.getAttribute("href")).toBe("/cart/")
    );
  });
});
