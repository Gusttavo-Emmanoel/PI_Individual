var armaClasseModel = require("../models/armaClasseModel");

function listar(req, res){
    armaClasseModel.listar().then(function(resultado){
        res.json(resultado)

    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar
}