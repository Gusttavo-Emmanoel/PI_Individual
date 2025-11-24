var armaModel = require("../models/armaModel");

function listar(req, res){
    armaModel.listar().then(function(resultado){
        res.json(resultado)

    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar
}