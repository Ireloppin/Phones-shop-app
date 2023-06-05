import { ProductsRepository } from "../repositories/productsData.repository";
import { products as initialsProducts } from "../mocks/productsData.json";
import { ProductsDataUseCase } from "../usecases/all-products.usecase";

jest.mock("../repositories/productsData.repository");

describe("get products", () => {
  it("get meat data", async () => {
    ProductsRepository.mockImplementation(() => {
      return {
        getProductsData: () => {
          return initialsProducts;
        },
      };
    });
    const productsData = await ProductsDataUseCase.execute();

    expect(productsData.length).toBe(100);
    expect(productsData[0].model).toBe("Iconia Talk S");
  });
});
