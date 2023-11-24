require('dotenv').config()

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>{
    return res.json('ok')
})

server.listen(process.env.PORT)