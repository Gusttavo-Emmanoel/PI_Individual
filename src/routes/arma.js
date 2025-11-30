var express = require("express");
var router = express.Router();

var armaController = require("../controllers/armaController");

router.get("/listar", function(req, res){
    armaController.listar(req, res);
});

router.get("/listar/armaClasse/:idClasse", function(req, res){
    armaController.listar(req, res);
});

module.exports = router;