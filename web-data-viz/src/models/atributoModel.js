var database = require("../database/config")

function listarPorId(idAtributo) {
    var instrucaoSql = `
        SELECT id_atributo, forca, destreza, constituicao, inteligencia, sabedoria, carisma FROM atributo WHERE id_atributo = ${idAtributo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(atributo) {
    var instrucaoSql = `INSERT INTO atributo (forca, destreza, constituicao, inteligencia, sabedoria, carisma) VALUES (${atributo.forca}, ${atributo.destreza}, ${atributo.constituicao}, ${atributo.inteligencia}, ${atributo.sabedoria}, ${atributo.carisma})`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarPorId,
    cadastrar
};