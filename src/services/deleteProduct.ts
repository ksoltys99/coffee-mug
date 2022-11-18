import { Request, Response } from "express";
import { ProductController } from "../controllers/product";

export const deleteProductService = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const productController = new ProductController("", 0, new Date(), id);
  await productController
    .delete()
    .then(() => {
      return res.status(200).send("product deleted");
    })
    .catch((err: Error) => {
      console.log(err);
      return res.status(500).send("something went wrong");
    });
};
