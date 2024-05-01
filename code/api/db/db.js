const { Client } = require('pg');

const client = new Client({
  user:'postgres',
  host:'127.0.0.1',
  database:'postgres',
  password:'vriddhi',
  port:5432,
});

client.query("SET search_path to 'TODO'");

client.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});


module.exports = client;