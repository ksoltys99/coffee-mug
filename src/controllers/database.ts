import { Product } from "./product";
const jsonfile = require("jsonfile");
const databasePath: string = "./database/products.json";

export class DatabaseController {
  constructor() {}
  async getProducts() {
    let products: any;
    await jsonfile
      .readFile(databasePath)
      .then((data: any) => {
        console.log(data.products);
        products = JSON.parse(JSON.stringify(data.products));
      })
      .catch((err: Error) => {
        throw err;
      });
    return products;
  }
  async saveProducts(data: Product[]) {
    jsonfile.writeFile(databasePath, { products: data }, (err: Error) => {
      if (err) console.error(err);
    });
  }
}
