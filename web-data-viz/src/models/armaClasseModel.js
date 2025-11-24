var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT fk_classe, fk_arma FROM arma_classe;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar
};