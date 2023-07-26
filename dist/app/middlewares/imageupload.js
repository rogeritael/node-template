"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageUpload = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// define o destino das imagens e gera o nome
const imageStorage = _multer.default.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'src/public/images');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + String(Math.floor(Math.random() * 1000)) + _path.default.extname(file.originalname));
  }
});
const imageUpload = (0, _multer.default)({
  storage: imageStorage,
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return callback(new Error('Formato inválido! Envie um arquivo jpg ou png'));
    }
    callback(null, true);
    // callback(undefined, true);
  }
});
exports.imageUpload = imageUpload;