var classeModel = require("../models/classeModel");

function listar(req, res){
    classeModel.listar().then(function(resultado){
        res.json(resultado)

    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar
}