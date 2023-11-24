require('dotenv').config()

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>{
    return res.json('Aplicação Rodando em EC2 AWS')
})

server.listen(3000)