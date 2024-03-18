const parseXlSX = require("node-xlsx")

function excelToJson(diretorioArquivo) {

    return new Promise((resolve, reject) => {
        try {

            let arrayResponse = parseXlSX.parse(diretorioArquivo)[0].data //Pega um array a partir dos xlsx ou xls
            const keys = arrayResponse[0] // Pega as chaves do array
            let responseJson = [] // o array com os jsons das frases

            for (let index = 1; index < arrayResponse.length; index++) {

                const frase = arrayResponse[index] // pega apenas os atributos das frases sem as chaves

                const obj = {};

                // Pega a chave da lista de chave e o atributo correspondende da frase para transformar em json
                for (let index = 0; index < frase.length; index++) {
                    obj[keys[index]] = frase[index]
                }

                responseJson.push(obj) // adiciona o objeto com chave + atributo a lista de json
            }

            resolve(responseJson)

        }
        catch (err) {
            reject("Erro ao converter arquivo de Excel para Json")
        }
    })

}

module.exports = excelToJson