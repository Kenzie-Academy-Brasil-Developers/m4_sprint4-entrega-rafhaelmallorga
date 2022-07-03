import express from "express";
import "dotenv/config";
import categoriesRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes";
import productsCategoryRouter from "./routers/productsCategory.routes";
import { startDatabase } from "./database";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/products/category", productsCategoryRouter);

export default app.listen(process.env.NODE_ENV === "test" ? 3001 : 3000, () => {
  startDatabase();
  console.log("Server running");
});
