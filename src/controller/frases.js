const { randomInt } = require("crypto");
const excelToJson = require("../utils/xlsxTojson");
const { resolve } = require("path")

async function gerarFrase() {

   console.log(resolve(__dirname, "../", "arquivos", "frases.xlsx"))
   const response = await excelToJson(resolve(__dirname, "../", "arquivos", "frases.xlsx"))

   const numAleatorio = randomInt(0, response.length)
   return response[numAleatorio]

}

module.exports = gerarFrase