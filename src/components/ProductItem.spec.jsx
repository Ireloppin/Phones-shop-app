import React from "react";
import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem"

describe("ProductItem specs", () => {
  it("should show the product", () => {
    const product = {
      id: 'xyPoqGJxYR4Nn3yVGQcfI',
      brand: 'Acer',
      model: 'Iconia Tab 10 A3-A40',
      price: 230,
      imgUrl: "https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg"
    }

    render(ProductItem({product}));
    const element= screen.getByText("Iconia Tab 10 A3-A40");
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H3');
    expect(true).toBeTruthy();
  });
});
