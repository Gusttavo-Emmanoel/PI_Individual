var armaduraClasseModel = require("../models/armaduraClasseModel");

function listar(req, res){
    armaduraClasseModel.listar().then(function(resultado){
        res.json(resultado)

    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar
}