"use strict";

require("dotenv/config");
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_app.default.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
});