//Import das libs
const express = require('express');
const mongoose = require('mongoose');

//Import do arquivo/module routes.js
const routes = require('./routes');

//Express é usado como uma função
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ty5tl.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



//Para o express usar o formato JSON
app.use(express.json());
app.use(routes);

//Porta para executar a aplicação.
app.listen(3333);