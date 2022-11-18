import { Request, Response } from "express";
import { ProductController } from "../controllers/product";

export const showProductsService = async (req: Request, res: Response) => {
  const productController = new ProductController("", 0);
  const data = await productController.showAll();
  if (!data)
    return res.status(500).send("couldn't fetch data, please try again");
  return res.status(200).send(data);
};
