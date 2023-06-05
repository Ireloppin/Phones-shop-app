import axios from "axios";

export class ProductsRepository {
  async getProductsData() {
    return await (
      await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s")
    ).data;
  }
}
