import { Request, Response } from "express";
import { ProductController } from "../controllers/product";

export const addProductService = async (req: Request, res: Response) => {
  const data = req.body;
  if (!data.name || !data.price)
    return res.status(500).send("name and price are required");
  if (data.name.length > 100)
    return res.status(500).send("name can contain only up to 100 characters");
  const product = new ProductController(data.name, data.price);
  await product
    .add()
    .then(() => {
      return res.status(200).send("product added");
    })
    .catch((err: Error) => {
      console.log(err);
      return res.status(500).send("something went wrong");
    });
};
