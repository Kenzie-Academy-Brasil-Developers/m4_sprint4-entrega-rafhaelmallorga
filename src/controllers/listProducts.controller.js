import listProductsService from "../services/products/listProducts.service";

const listProductsController = async (req, res) => {
  try {
    const products = await listProductsService();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listProductsController;
