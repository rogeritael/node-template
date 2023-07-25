import db from '../database/postgres';

interface contactProps {
    id?: string,
    name: string,
    email: string,
    phone: string,
    category_id: string
}

class UserRepository {
  findAll() {

  }

  findById(id: string){

  }

  findByEmail(email: string){

  }

  delete(id: string){

  }

  async create({ name , email, phone, category_id }: contactProps){
    //[] pega o primeira posição do array e coloca dentro da constante row
    const [row] = await db(`
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
