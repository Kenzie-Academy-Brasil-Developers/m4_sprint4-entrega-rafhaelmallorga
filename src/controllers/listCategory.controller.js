import listCategoryService from "../services/categories/listCategory.service";

const listCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await listCategoryService(id);

    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listCategoryController;
