require('dotenv').config()
const knex = require('./conexao')

const express = require('express');

const server = express();

server.use(express.json());

const port = process.env.PORT || 3000

server.get('/', async (req, res) =>{
try {
        const carros = await knex('carro');
        
        return res.json(carros)
        
} catch (error) {
        console.log(error.message);
        
        return res.status(500).json({mensagem: "erro interno server"})}
     })


server.listen(port)