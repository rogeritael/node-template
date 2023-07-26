"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _UserRepository = _interopRequireDefault(require("../repositories/UserRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserController {
  async index(req, res) {
    //listar todos os registros
    const users = await _UserRepository.default.findAll();
    res.status(200).json(users);
  }
  async show(req, res) {
    //obter UM registro
    const {
      id
    } = req.params;
    const user = await _UserRepository.default.findById(id);
    res.status(200).json(user);
  }
  async store(req, res) {
    //criar novo registro
    const {
      name,
      email,
      phone,
      category_id
    } = req.body;
    const user = await _UserRepository.default.create({
      name,
      email,
      phone,
      category_id
    });
    res.json(user);
  }
  async update(req, res) {
    //editar um registro[]
    const {
      id
    } = req.params;
    const {
      name,
      email,
      phone,
      category_id
    } = req.body;
    const user = await _UserRepository.default.update(id, {
      name,
      email,
      phone,
      category_id
    });
    res.json(user);
  }
  async delete(req, res) {
    //Deletar um registro
    const {
      id
    } = req.params;
    await _UserRepository.default.delete(id);
    res.sendStatus(204);
  }
}
var _default = new UserController();
exports.default = _default;