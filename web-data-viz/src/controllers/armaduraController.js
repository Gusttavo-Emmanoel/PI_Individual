var armaduraModel = require("../models/armaduraModel");

function listar(req, res){
    armaduraModel.listar().then(function(resultado){
        res.json(resultado)

    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar
}