import { addProductService } from "../services/addProduct";
import { deleteProductService } from "../services/deleteProduct";
import { showProductDetailsService } from "../services/showProductDetails";
import { showProductsService } from "../services/showProducts";
import { updateProductService } from "../services/updateProduct";
const express = require("express");
const router = express.Router();

router.get("/", showProductsService);

router.get("/:id", showProductDetailsService);

router.post("/add", addProductService);

router.put("/update/:id", updateProductService);

router.delete("/delete/:id", deleteProductService);

module.exports = router;
