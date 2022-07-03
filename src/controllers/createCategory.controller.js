import createCategoryService from "../services/categories/createCategory.service";

const createCategoryController = async (req, res) => {
  try {
    const newCategory = await createCategoryService(req.body);

    return res.status(201).json({
      message: "Category created",
      category: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createCategoryController;
