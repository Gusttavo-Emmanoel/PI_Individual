var habilidadeModel = require("../models/habilidadeModel");

function listarPorIdClasse(req, res){
    let idClasse = req.params.idClasse;

    habilidadeModel.listarPorIdClasse(idClasse).then(function(resultado){
        res.json(resultado)

    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarPorIdClasse
}