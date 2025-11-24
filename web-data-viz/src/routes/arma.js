var express = require("express");
var router = express.Router();

var armaController = require("../controllers/armaController");

router.get("/listar", function(req, res){
    armaController.listar(req, res);
});

module.exports = router;