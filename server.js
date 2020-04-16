const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
//permitindo o envio de dados para a aplicacao no formato json
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/node-api', { useUnifiedTopology: true, useNewUrlParser: true});
requireDir('./src/models');

//Rotas
//use recebe qualquer tipo de requisição
app.use('/api', require('./src/routes'));

//porta 3001 do navegador
app.listen(3001);