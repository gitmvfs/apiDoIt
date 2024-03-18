const gerarFrase = require("../controller/frases")

const router = require("express").Router()

router.get("/frases", async (req, res) => {

    try {
        const frase = await gerarFrase()

        res.json({data: frase , status : 200 , msg: "frase gerada com sucesso"}).status(200)
    }
    catch(err){
        res.json({err: err , status: 500, msg: "erro gerar frase"}).status(500)
    }


})

module.exports = router