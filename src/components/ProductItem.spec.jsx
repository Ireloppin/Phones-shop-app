import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductItem from "./ProductItem";

describe("ProductItem specs", () => {
  it("should show the product", () => {
    const mockProduct = {
      id: "xyPoqGJxYR4Nn3yVGQcfI",
      brand: "Acer",
      model: "Iconia Tab 10 A3-A40",
      price: 230,
      imgUrl:
        "https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg",
    };
    const mockContextValue = {
      basename: "/",
    };

    const MockContextProvider = ({ children }) => (
      <Router basename={mockContextValue.basename}>{children}</Router>
    );

    const { getByText } = render(
      <MockContextProvider>
        <ProductItem product={mockProduct} />
      </MockContextProvider>
    );

    const element = getByText("Iconia Tab 10 A3-A40");
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual("H3");
    expect(true).toBeTruthy();
  });
});
