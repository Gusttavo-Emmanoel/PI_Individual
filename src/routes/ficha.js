var express = require("express");
var router = express.Router();

var fichaController = require("../controllers/fichaController");

router.get("/listar", function(req, res){
    fichaController.listar(req, res);
});

//Rota para executar a listagem das fichas pelo o Id do usuario.
router.get("/:idUsuario", function(req, res){
    fichaController.listarPorId(req, res);
});

router.post("/cadastrar", function (req, res) {
    fichaController.cadastrar(req, res);
});

module.exports = router;