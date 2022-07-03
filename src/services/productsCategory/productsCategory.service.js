import database from "../../database";

const listProductCategoryService = async (id) => {
  try {
    const res = await database.query(
      `
        SELECT
          pd.name,
          pd.price,
          cat.name category
        FROM
          products pd
          JOIN categories cat ON cat.id = pd.category_id
        WHERE
          cat.id = $1;         
        `,
      [id]
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductCategoryService;
