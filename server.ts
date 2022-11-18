import bodyParser from "body-parser";
import { port } from "./src/configs/config";

const express = require("express");
const app = express();
const productRouter = require("./src/routes/products");

app.use(express.urlencoded());
app.use(bodyParser.json());

app.use("/products", productRouter);

app.listen(port);
