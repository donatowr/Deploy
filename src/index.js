require('dotenv').config()
const knex = require('./conexao')

const express = require('express');

const server = express();

server.use(express.json());



server.get('/', async (req, res) =>{
return res.status(200).json({message: "Grupo Quatro Bits"})
})

server.listen(process.env.PORT)