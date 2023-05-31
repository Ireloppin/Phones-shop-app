import React, { useEffect, useContext } from "react";
import { render, act } from "@testing-library/react";
import { CartProvider, CartContext } from "./cart";

jest.useFakeTimers();

describe("<CartProvider />", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllTimers();
  });

  it("initializes selectedProducts from localStorage", () => {
    const products = [{ id: 1 }, { id: 2 }];
    localStorage.setItem("products", JSON.stringify(products));

    const TestComponent = () => {
      const { selectedProducts } = React.useContext(CartContext);
      expect(selectedProducts).toEqual(products);
      return null;
    };

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
  });

  it("updates localStorage when selectedProducts changes", () => {
    const TestComponent = () => {
      const { setSelectedProducts } = React.useContext(CartContext);
      useEffect(() => {
        setSelectedProducts([{ id: 1 }]);
      }, []);
      return null;
    };

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(localStorage.getItem("products")).toEqual(
      JSON.stringify([{ id: 1 }])
    );
  });

  it("removes items from localStorage after 1 hour", () => {
    const products = [{ id: 1 }];
    localStorage.setItem("products", JSON.stringify(products));

    render(<CartProvider>{null}</CartProvider>);

    act(() => {
      jest.advanceTimersByTime(1000 * 60 * 60);
    });

    expect(localStorage.getItem("products")).toBeNull();
  });
});
