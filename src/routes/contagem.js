const { contagemTarefas } = require("../controller/contagem")

const router = require("express").Router()

router.get("/contagem", async(req, res) => {

    try {
       const response = await contagemTarefas()
       res.json(response).status(200)
    }
    catch (err) {
       res.json(err).status(500)

    }

})

module.exports = router