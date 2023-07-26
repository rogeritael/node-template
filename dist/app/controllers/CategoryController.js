"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CategoryRepository = _interopRequireDefault(require("../repositories/CategoryRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CategoryController {
  async index(req, res) {
    const categories = await _CategoryRepository.default.findAll();
    res.status(200).json(categories);
  }
  async store(req, res) {
    const {
      name
    } = req.body;
    const category = await _CategoryRepository.default.create(name);
    res.status(200).json(category);
  }
}
var _default = new CategoryController();
exports.default = _default;