import { Router } from "express";
import listProductCategoryController from "../controllers/listProductCategory.controller";

const productsCategoryRouter = Router();

productsCategoryRouter.get("/:category_id", listProductCategoryController);

export default productsCategoryRouter;
