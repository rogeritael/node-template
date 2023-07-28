"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _postgres = _interopRequireDefault(require("../database/postgres"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserRepository {
  async findAll() {
    // const rows = await query(`
    //   SELECT users.*, categories.name AS category_name FROM users
    //   LEFT JOIN categories ON categories.id = users.category_id
    //   ORDER BY users.name
    // `); //onde id de categories equivale a category_id de users
    const rows = [{
      user_id: 1,
      name: 'Roger'
    }, {
      user_id: 2,
      name: 'Nath'
    }];
    return rows;
  }
  async findById(id) {
    const [row] = await (0, _postgres.default)(`
      SELECT * FROM users
      WHERE id = $1
    `, [id]);
    return row;
  }
  async findByEmail(email) {
    const [row] = await (0, _postgres.default)(`
      SELECT * FROM users
      WHERE email = $1
    `, [email]);
    return row;
  }
  async delete(id) {
    const deleteOP = await (0, _postgres.default)(`
      DELETE FROM users
      WHERE id = $1
    `, [id]);
    return deleteOP;
  }
  async create({
    name,
    email,
    phone,
    category_id
  }) {
    //[] pega o primeira posição do array e coloca dentro da constante row
    const [row] = await (0, _postgres.default)(`
      INSERT INTO users(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]); //RETURNING ou RETURNING name -> retorna os dados após executar o script

    return row;
  }
  async update(id, {
    name,
    email,
    phone,
    category_id
  }) {
    const [row] = await (0, _postgres.default)(`
      UPDATE users
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);
    return row;
  }
}
var _default = new UserRepository();
exports.default = _default;