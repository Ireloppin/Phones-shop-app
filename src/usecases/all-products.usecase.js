import { Product } from "../model/product";
import { ProductsRepository } from "../repositories/productsData.repository";
import { products as initialsProducts } from "../mocks/productsData.json";

export class ProductsDataUseCase {
  static async execute() {
    const repository = new ProductsRepository();
    const productsApiData = initialsProducts;
    const formattedProductlData = productsApiData.map((product) => {
      return new Product({
        id: product.id,
        brand: product.brand,
        model: product.model,
        price: product.price,
        imageUrl: product.imageUrl,
      });
    });

    return formattedProductlData;
  }
}
