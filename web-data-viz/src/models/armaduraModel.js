var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT id_armadura, nome, defesa, furtividade FROM armadura;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar
};