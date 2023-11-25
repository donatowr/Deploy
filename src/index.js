require('dotenv').config()
const knex = require('./conexao')

const express = require('express');

const server = express();

server.use(express.json());

const port = process.env.PORT || 3000

server.get('/', async (req, res) =>{
        return res.json('tudo certo')
     })

server.listen(port)