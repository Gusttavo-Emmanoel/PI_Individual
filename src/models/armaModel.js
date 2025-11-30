var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT id_arma, nome, dano, alcance FROM arma;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorIdClasse(idClasse) {
    var instrucaoSql = `
        SELECT id_arma, nome, dano, alcance FROM arma 
            LEFT JOIN arma_classe 
                ON arma_classe.fk_arma = arma.id_arma 
            WHERE arma_classe.fk_classe = ${idClasse};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar
};