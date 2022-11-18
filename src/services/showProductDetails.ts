import { Request, Response } from "express";
import { ProductController } from "../controllers/product";

export const showProductDetailsService = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const productController = new ProductController("", 0, undefined, id);
  const productDetails = await productController.showProductDetails();
  if (!productDetails) res.status(500).send("can't find product with given id");
  res.status(200).send(productDetails);
};
