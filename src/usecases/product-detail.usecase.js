import { ProductDetail } from "../model/productDetail";
import { ProductsRepository } from "../repositories/productsData.repository";
import { singleProduct } from "../mocks/singleProduct.json";

export class ProductDetailDataUseCase {
  static async execute() {
    const repository = new ProductsRepository();

    const formattedProductData = new ProductDetail({
      id: singleProduct.id,
      brand: singleProduct.brand,
      model: singleProduct.model,
      price: singleProduct.price,
      imageUrl: singleProduct.imgUrl,
      cpu: singleProduct.cpu,
      ram: singleProduct.ram,
      os: singleProduct.os,
      displayResolution: singleProduct.displayResolution,
      battery: singleProduct.battery,
      primaryCamera: singleProduct.primaryCamera,
      secondaryCamera: singleProduct.secondaryCmera,
      dimentions: singleProduct.dimentions,
      weight: singleProduct.weight,
      colors: singleProduct.options.colors,
      storages: singleProduct.options.storages,
      options: singleProduct.options,
    });
    return formattedProductData;
  }
}
