import axios from "axios";

export class ProductsRepository {
  async getProductsData() {
    return await (
      await axios.get("https://front-test-api.herokuapp.com/product")
    ).data;
  }
  async getProductDetailData() {
    return await (
      await axios.get("https://www.themealdb.com/product/:id")
    ).data;
  }
}
