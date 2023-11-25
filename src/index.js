require('dotenv').config()
const knex = require('./config')

const express = require('express');

const server = express();

server.use(express.json());

const port = process.env.PORT || 3000

server.get('/', async (req, res) =>{
    const carros = await knex('carro');
    return res.json(carros)
})

server.listen(port)