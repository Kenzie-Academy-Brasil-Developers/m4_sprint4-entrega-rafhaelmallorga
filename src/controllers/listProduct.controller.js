import listProductService from "../services/products/listProduct.service";

const listProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await listProductService(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listProductController;
