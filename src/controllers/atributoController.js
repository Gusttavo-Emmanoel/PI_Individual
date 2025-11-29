var atributoModel = require("../models/atributoModel");

function listarPorId(req, res) {
    var idAtributo = req.params.idAtributo;

    atributoModel.listarPorId(idAtributo).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar o atributo: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}
  
function cadastrar(req, res) {
    var atributo = req.body;
  
    atributoModel.cadastrar(atributo)
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
    listarPorId,
    cadastrar
}