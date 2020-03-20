//req => é o que está sendo eviado pela aplicação   /REQUEST
    //req.query => acessar query params (para filtros)
    //req.params => acessar route params (para edição, delete)
    //req.body => acessar corpo da requisição

//res => resposta do servidor                       /RESPONSE

const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store)
    //nome da rota sempre ingles/plural

    //res.send('') => Retorna uma string comum
    //res.json() => Retorna um JSON 


module.exports = routes;