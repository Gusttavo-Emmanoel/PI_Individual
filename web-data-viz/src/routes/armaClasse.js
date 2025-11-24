var express = require("express");
var router = express.Router();

var armaClasseController = require("../controllers/armaClasseController");

router.get("/listar", function(req, res){
    armaClasseController.listar(req, res);
});

module.exports = router;