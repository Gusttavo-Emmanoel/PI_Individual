var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT id_habilidade, nome, descricao, dano, fk_classe FROM habilidade;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorIdClasse(idClasse) {
    var instrucaoSql = `
        SELECT id_habilidade, nome, descricao, dano, fk_classe FROM habilidade 
            WHERE fk_classe = ${idClasse};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorIdClasse
};