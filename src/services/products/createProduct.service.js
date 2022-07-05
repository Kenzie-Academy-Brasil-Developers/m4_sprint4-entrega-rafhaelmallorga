import database from "../../database";
import { v4 as uuid } from "uuid";

const createProductService = async (data) => {
  try {
    const res = await database.query(
      `
            INSERT INTO 
                products(id, name, price, category_id)
            VALUES
                ($1, $2, $3, $4)
            RETURNING *;
        `,
      [uuid(), data.name, data.price, data.category_id]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductService;
