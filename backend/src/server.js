//Import do express
const express = require('express');

//Express é usado como uma função
const app = express();

//Trabalhando na rota
// '/' = main, endpoint principal, mesma coisa que usar localhost:porta 
app.get('/', (req, res) => {
    //res.send('') => Retorna uma string comum
    //res.json() => Retorna um JSON 
    res.json({ 'message':'Hello World'});
});

//Porta para executar a aplicação.
app.listen(3333);

//console.log(app);