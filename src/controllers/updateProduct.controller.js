import updateProductService from "../services/products/updateProduct.service";

const updateProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await updateProductService(id, req.body);

    return res.status(200).json({
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateProductController;
