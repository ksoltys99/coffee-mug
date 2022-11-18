import { Request, Response } from "express";
import { ProductController } from "../controllers/product";

export const updateProductService = async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;

  const product = new ProductController(
    body.name,
    body.price,
    new Date(),
    parseInt(id)
  );
  await product
    .update()
    .then(() => {
      res.status(200).send("updated product");
    })
    .catch((err: Error) => {
      console.log(err);
      res.status(500).send("something went wrong");
    });
};
