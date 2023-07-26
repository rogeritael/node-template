"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _UserController = _interopRequireDefault(require("../controllers/UserController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
routes.get('/users', _UserController.default.index);
routes.get('/users/:id', _UserController.default.show);
routes.delete('/users/:id', _UserController.default.delete);
routes.post('/users/', _UserController.default.store);
routes.put('/users/:id', _UserController.default.update);
var _default = routes;
exports.default = _default;