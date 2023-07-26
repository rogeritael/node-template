"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _UserRoutes = _interopRequireDefault(require("./app/routes/UserRoutes"));
var _CategoryRoutes = _interopRequireDefault(require("./app/routes/CategoryRoutes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class App {
  constructor() {
    this.server = void 0;
    this.server = (0, _express.default)();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(_express.default.json());
    this.server.use((0, _cors.default)());
  }
  routes() {
    this.server.use(_UserRoutes.default);
    this.server.use(_CategoryRoutes.default);
  }
}
var _default = new App().server;
exports.default = _default;