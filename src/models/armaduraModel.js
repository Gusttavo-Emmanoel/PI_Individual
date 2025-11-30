var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT id_armadura, nome, defesa, furtividade FROM armadura;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarPorIdClasse(idClasse) {
    var instrucaoSql = `
        SELECT id_armadura, nome, defesa, furtividade FROM armadura 
            LEFT JOIN armadura_classe 
                ON armadura_classe.fk_armadura = armadura.id_armadura 
            WHERE armadura_classe.fk_classe = ${idClasse};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorIdClasse
};