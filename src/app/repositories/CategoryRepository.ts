import query from '../database/postgres';

class CategoryRepository {
  async findAll(){
    const rows = await query(`
      SELECT *
      FROM categories
    `);

    return rows;
  }

  async create(name: string){
    const [ row ] = await query(`
      INSERT INTO categories(name)
      VALUES ($1)
      RETURNING *
    `, [name]);

    return row;
  }
}

export default new CategoryRepository();
