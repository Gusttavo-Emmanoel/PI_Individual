var express = require("express");
var router = express.Router();

var atributoController = require("../controllers/atributoController");

router.get("/:idAtributo", function (req, res) {
  atributoController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
  atributoController.cadastrar(req, res);
})

module.exports = router;