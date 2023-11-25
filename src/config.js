const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'cubos-teste.cwhglp5zhx80.us-east-1.rds.amazonaws.com',
      port : 5432,
      user : 'postgres',
      password : 'don158692',
      database : 'myDatabase'
    }
  });

  module.exports = knex