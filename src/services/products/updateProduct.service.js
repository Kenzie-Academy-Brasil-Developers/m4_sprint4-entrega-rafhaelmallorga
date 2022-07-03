import database from "../../database";

const updateProductService = async (id, data) => {
  try {
    const res = await database.query(
      `
          UPDATE
            products
          SET
            name = COALESCE($1, name),
            price = COALESCE($2, price),
            category_id = COALESCE($3, category_id)
          WHERE
            id = $4
          RETURNING *;         
        `,
      [data.name, data.price, data.category_id, id]
    );

    if (!res.rowCount) {
      throw new Error("Product not found");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
