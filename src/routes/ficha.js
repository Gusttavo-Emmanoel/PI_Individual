var express = require("express");
var router = express.Router();

var fichaController = require("../controllers/fichaController");

router.get("/listar", function(req, res){
    fichaController.listar(req, res);
});

router.get("/:idUsuario", function(req, res){
    fichaController.listarPorId(req, res);
});

router.post("/cadastrar", function (req, res) {
    fichaController.cadastrar(req, res);
});

module.exports = router;