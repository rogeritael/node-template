"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const {
  Client
} = require('pg');
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'users'
});
client.connect();

// async function query(queryString: string){
//   const result = await client.query(queryString);
//   return result.rows;
// }

const query = async (query, values) => {
  const {
    rows
  } = await client.query(query, values);
  return rows;
};
var _default = query;
exports.default = _default;