var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT id_ficha, nome, fk_usuario, fk_classe, fk_raca, fk_atributo FROM ficha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorId(id_usuario) {
    var instrucaoSql = `
        SELECT ficha.id_ficha, ficha.nome AS nomeFicha, 
            raca.nome AS racaNome, raca.atributo AS racaAtributo, raca.descricao AS racaDescricao,
            atributo.forca, atributo.destreza, atributo.constituicao, atributo.inteligencia, atributo.sabedoria, atributo.carisma, 
            classe.nome AS classeNome, classe.vida, classe.descricao AS classeDescricao 
            FROM ficha 
        LEFT JOIN usuario 
            ON usuario.id_usuario = ficha.fk_usuario
        LEFT JOIN raca 
            ON raca.id_raca = ficha.fk_raca
        LEFT JOIN atributo 
            ON atributo.id_atributo = ficha.fk_atributo
        LEFT JOIN classe 
            ON classe.id_classe = ficha.fk_classe

        WHERE usuario.id_usuario = ${id_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function cadastrar(ficha) {
    var instrucaoSql = `INSERT INTO ficha (nome, fk_usuario, fk_classe, fk_raca, fk_atributo) 
    VALUES ('${ficha.nome}', ${ficha.fk_usuario}, ${ficha.fk_classe}, ${ficha.fk_raca}, ${ficha.fk_atributo})`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorId,
    cadastrar
};