var fichaModel = require("../models/fichaModel");

function listar(req, res){
    fichaModel.listar().then(function(resultado){
        res.json(resultado)

    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorId(req, res){
    let idUsuario = Number(req.params.idUsuario);

    console.log(idUsuario);
    fichaModel.listarPorId(idUsuario).then(function(resultado){
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).json([]);
        }

    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var ficha = req.body;
  
    fichaModel.cadastrar(ficha)
    .then((resultado) => {
      console.log("resultado:", resultado)
        res.status(201).json(resultado);
    }
    ).catch((erro) => {
        console.log(erro);
        console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
    
}

module.exports = {
    listar,
    listarPorId,
    cadastrar
}