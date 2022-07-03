import listProductCategoryService from "../services/productsCategory/productsCategory.service";

const listProductCategoryController = async (req, res) => {
  try {
    const category_id = req.params.category_id;

    const categoryProductsList = await listProductCategoryService(category_id);

    return res.status(200).json(categoryProductsList);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listProductCategoryController;
