import deleteCategoryService from "../services/categories/deleteCategory.service";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await deleteCategoryService(id);

    return res.status(204).json();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteCategoryController;
