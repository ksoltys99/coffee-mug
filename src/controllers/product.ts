import { DatabaseController } from "./database";

export interface Product {
  id: number;
  name: string;
  price: number;
  updateDate?: Date;
}

export class ProductController implements Product {
  readonly id!: number;
  name: string;
  price: number;
  updateDate?: Date;
  _dataController: DatabaseController;

  constructor(name: string, price: number, updateDate?: Date, id?: number) {
    if (id) this.id = id;
    this.name = name;
    this.price = price;
    this.updateDate = updateDate;
    this._dataController = new DatabaseController();
  }

  async add() {
    const products: Product[] = await this._dataController.getProducts();
    const id = products.length > 0 ? products[products.length - 1].id + 1 : 0;
    products.push({
      id: id,
      name: this.name,
      price: this.price,
      updateDate: this.updateDate,
    });
    this._dataController.saveProducts(products);
  }

  async update() {
    const products: Product[] = await this._dataController.getProducts();
    let isValidId = false;
    products.forEach((product: Product) => {
      if (product.id === this.id) {
        isValidId = true;
        if (this.name !== undefined) product.name = this.name;
        if (this.price !== undefined) product.price = this.price;
        if (this.updateDate) product.updateDate = this.updateDate;
      }
    });
    if (!isValidId) return Promise.reject();
    await this._dataController.saveProducts(products);
  }

  async delete() {
    const products: Product[] = await this._dataController.getProducts();

    const objToDeleteIndex = products.findIndex((obj) => obj.id === this.id);
    if (objToDeleteIndex < 0) return Promise.reject();
    products.splice(objToDeleteIndex, 1);

    await this._dataController.saveProducts(products);
  }

  async showAll() {
    const products: Product[] = await this._dataController.getProducts();

    return products.map((e: Product) => e.name);
  }

  async showProductDetails() {
    const products: Product[] = await this._dataController.getProducts();

    const chosenProduct = products.find((el: Product) => el.id == this.id);

    if (!chosenProduct) return Promise.reject();

    return chosenProduct;
  }
}
