const { Client } = require('pg')
const fs = require('fs');

const config = {
  user: 'candidate',
  password: '62I8anq3cFq5GYh2u4Lh',
  port: 6432,
  database: 'db1',
  host: 'rc1c-2m0keqdcncuwizmx.mdb.yandexcloud.net',
  // this object will be passed to the TLSSocket constructor
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('./CA.pem').toString(),
  },
}

const client = new Client(config)

client.connect();

const text = `CREATE TABLE "public"."test2222" (
  "id" serial,
  "name" text NOT NULL,
  "data" jsonb NOT NULL,
  PRIMARY KEY ("id")
);`

client
  .query(text)
  .then(res => {
    console.log(res)
  })
  .catch(e => console.error(e.stack))
