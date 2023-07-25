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

const query = async (query: string, values: any) => {
  const { rows } = await client.query(query, values);
  return rows;
};

export default query;
