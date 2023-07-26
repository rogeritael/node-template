"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _CategoryController = _interopRequireDefault(require("../controllers/CategoryController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
routes.get('/categories', _CategoryController.default.index);
routes.post('/categories', _CategoryController.default.store);
var _default = routes;
exports.default = _default;