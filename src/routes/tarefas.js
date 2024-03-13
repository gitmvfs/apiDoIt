const { recuperarTodasTarefas, recuperarTarefaPelaCategoria, criarTarefa } = require("../controller/tarefas")

const router = require("express").Router()

// Devolve todas as tarefas

router.get("/tarefa", async (req, res) => {

    try {
        const response = await recuperarTodasTarefas()
        console.log(response.data)
        res.json(response).status(200)
    }
    catch (err) {
        res.json({ err: err, code: 500 }).status(500)
    }

})


router.get("/tarefa/categoria", async (req, res) => {

    try {

        const response = await recuperarTarefaPelaCategoria(req.query.nomeCategoria)
        console.log(response.data)
        res.json(response).status(200)
    }
    catch (err) {
        res.json({ err: err, code: 500 }).status(500)
    }

})


router.post("/tarefa", async (req, res) => {

    try {
        let { titulo, descricao, concluido, nomeCategoria } = req.body
        const dataPrevistaTermino = new Date(req.body.dataPrevistaTermino)
        // concluido = new Boolean(concluido)

        const response = await criarTarefa(titulo, dataPrevistaTermino, descricao, concluido, nomeCategoria)
        res.json(response).status(200)

    }
    catch (err) {
        res.json({ err: err, code: 500 }).status(500)

    }

})


module.exports = router