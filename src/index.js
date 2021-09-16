// const axios = require('axios');
//
// const response = await axios.get('https://rickandmortyapi.com/api/character');
//
// console.log(response);

// console.log(client)

const { client } = require('./db');
client.connect();


const { getCharacters } = require('./api');

// (async () => {
//   const { data: { results }} = await getCharacters();
//
//   for (const data of results) {
//     const text = 'INSERT INTO test2222(name, data) VALUES($1, $2) RETURNING *'
//     const values = [data.name, data]
//
//     try {
//       const res = await client.query(text, values)
//       console.log(res.rows[0])
//     } catch (err) {
//       console.log(err.stack)
//     }
//   }
// })();


//
// const text = `CREATE TABLE "public"."test2222" (
//   "id" serial,
//   "name" text NOT NULL,
//   "data" jsonb NOT NULL,
//   PRIMARY KEY ("id")
// );`
//
// client
//   .query(text)
//   .then(res => {
//     console.log(res)
//   })
//   .catch(e => console.error(e.stack))
