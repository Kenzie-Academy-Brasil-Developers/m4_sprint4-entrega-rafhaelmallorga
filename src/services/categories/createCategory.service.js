import database from "../../database";

const createCategoryService = async (data) => {
  try {
    const res = await database.query(
      `
            INSERT INTO 
                categories(name)
            VALUES
                ($1)
            RETURNING *;
        `,
      [data.name]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategoryService;
