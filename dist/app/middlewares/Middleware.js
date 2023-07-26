"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const verifyToken = (req, res, next) => {
  //verifica se foi passado algum token
  if (!req.headers.authorization) {
    return res.status(422).json({
      message: 'Acesso negado'
    });
  }

  //verifica se o token é válido
  try {
    const verifiedToken = _jsonwebtoken.default.verify(req.headers.authorization, 'jfn30tk5#4f$');
    req.user = {
      id: verifiedToken.id
    };
    next();
  } catch (err) {
    res.status(422).json({
      message: 'Token inválido'
    });
  }

  //retorna o usuário
};
exports.verifyToken = verifyToken;