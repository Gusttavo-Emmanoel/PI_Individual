var express = require("express");
var router = express.Router();

var classeController = require("../controllers/classeController");

router.get("/listar", function(req, res){
    classeController.listar(req, res);
});

module.exports = router;