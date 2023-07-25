const { Client } = require('pg');

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

exports.query = async (query: string) => {
  const { rows } = await client.query(query);
  return rows;
};
