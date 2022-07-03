import { Router } from "express";
import createProductController from "../controllers/createProduct.controller";
import listProductController from "../controllers/listProduct.controller";
import listProductsController from "../controllers/listProducts.controller";
import updateProductController from "../controllers/updateProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";

const productsRouter = Router();

productsRouter.post("/", createProductController);
productsRouter.get("/", listProductsController);
productsRouter.get("/:id", listProductController);
productsRouter.patch("/:id", updateProductController);
productsRouter.delete("/:id", deleteProductController);

export default productsRouter;
