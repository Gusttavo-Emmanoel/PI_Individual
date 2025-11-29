var express = require("express");
var router = express.Router();

var armaduraController = require("../controllers/armaduraController");

router.get("/listar", function(req, res){
    armaduraController.listar(req, res);
});

module.exports = router;