import { ProductsRepository } from "../repositories/productsData.repository";
import { product } from "../mocks/singleProduct.json";
import { ProductDetailDataUseCase } from "../usecases/product-detail.usecase";

jest.mock("../repositories/productsData.repository");

describe("get products", () => {
  it("get meat data", async () => {
    ProductsRepository.mockImplementation(() => {
      return {
        getProductDetailData: () => {
          return product;
        },
      };
    });
    const productDetailData = await ProductDetailDataUseCase.execute();

    expect(productDetailData.brand).toBe("Acer");
    expect(productDetailData.model).toBe("Liquid mini E310");
  });
});
