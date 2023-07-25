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

  delete(id: string){

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

  update(id: string, { name , email, phone, category_id }: contactProps){

  }
}

export default new UserRepository();
