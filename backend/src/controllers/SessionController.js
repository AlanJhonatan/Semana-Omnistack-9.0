// index   => retorna uma lista de seções
// show    => retorna uma única seção
// store   => criar uma seção
// update  =>  alterar uma seção
// destroy => remover/deletar uma seção

const User = require('../models/User');

module.exports = {
    store(req,res) {
        //desestruturação => buscando o atributo no objeto
        const { email } = req.body;
    }
};