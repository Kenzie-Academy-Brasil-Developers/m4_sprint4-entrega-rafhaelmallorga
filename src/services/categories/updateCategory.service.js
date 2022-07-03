import database from "../../database";

const updateCategoryService = async (id, name) => {
  try {
    const res = await database.query(
      `
          UPDATE
            categories
          SET
            name = $1
          WHERE
            id = $2
          RETURNING *;         
        `,
      [name, id]
    );

    if (!res.rowCount) {
      throw new Error("Category not found");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategoryService;
