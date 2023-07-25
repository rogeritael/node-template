import query from '../database/postgres';

interface contactProps {
    id?: string,
    name: string,
    email: string,
    phone: string,
    category_id: string
}

class UserRepository {
  async findAll() {
    const rows = await query(`
      SELECT * FROM users
      ORDER BY name
    `);

    return rows;
  }

  async findById(id: string){
    const [ row ] = await query(`
      SELECT * FROM users
      WHERE id = $1
    `, [id]);

    return row;
  }

  async findByEmail(email: string){
    const [row] = await query(`
      SELECT * FROM users
      WHERE email = $1
    `, [email]);

    return row;
  }

  async delete(id: string){
    const deleteOP = await query(`
      DELETE FROM users
      WHERE id = $1
    `, [id]);

    return deleteOP;
  }

  async create({ name , email, phone, category_id }: contactProps){
    //[] pega o primeira posição do array e coloca dentro da constante row
    const [row] = await query(`
      INSERT INTO users(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]); //RETURNING ou RETURNING name -> retorna os dados após executar o script

    return row;
  }

  async update(id: string, { name , email, phone, category_id }: contactProps){
    const [row] = await query(`
      UPDATE users
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);

    return row;
  }
}

export default new UserRepository();
