var express = require("express");
var router = express.Router();

var habilidadeController = require("../controllers/habilidadeController");

router.get("/listar/habilidadeClasse/:idClasse", function(req, res){
    habilidadeController.listarPorIdClasse(req, res);
});

module.exports = router;