"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _postgres = _interopRequireDefault(require("../database/postgres"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CategoryRepository {
  async findAll() {
    const rows = await (0, _postgres.default)(`
      SELECT *
      FROM categories
    `);
    return rows;
  }
  async create(name) {
    const [row] = await (0, _postgres.default)(`
      INSERT INTO categories(name)
      VALUES ($1)
      RETURNING *
    `, [name]);
    return row;
  }
}
var _default = new CategoryRepository();
exports.default = _default;