import listCategoriesService from "../services/categories/listCategories.service";

const listCategoriesController = async (req, res) => {
  try {
    const categoriesList = await listCategoriesService();

    return res.status(200).json(categoriesList);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listCategoriesController;
