var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT id_raca, nome, atributo, descricao FROM raca;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar
};