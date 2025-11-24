var express = require("express");
var router = express.Router();

var armaduraClasseController = require("../controllers/armaduraClasseController");

router.get("/listar", function(req, res){
    armaduraClasseController.listar(req, res);
});

module.exports = router;