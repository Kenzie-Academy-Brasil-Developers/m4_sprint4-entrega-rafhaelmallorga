import createProductService from "../services/products/createProduct.service";

const createProductController = async (req, res) => {
  try {
    const newProduct = await createProductService(req.body);

    return res.status(201).json({
      message: "Product created",
      product: newProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createProductController;
