const { recuperarTodasTarefas, recuperarTarefaPelaCategoria, criarTarefa, atualizarTarefa, deletarTarefa } = require("../controller/tarefas")

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
        const { titulo, descricao, concluido, nomeCategoria } = req.body
        const dataPrevistaTermino = new Date(req.body.dataPrevistaTermino)

        const response = await criarTarefa(titulo, dataPrevistaTermino, descricao, concluido, nomeCategoria)

        response.data == 0 | response.code != 200
            ? res.json({ msg: "Erro ao criar tarefa", code: 400, response }).status(400)
            : res.json({ msg: "Tarefa criada com sucesso", code: 200, response }).status(200)

    }
    catch (err) {
        res.json({ err: err, code: 500 }).status(500)

    }

})


router.put("/tarefa", async (req, res) => {

    try {
        const { id, titulo, descricao, concluido } = req.body
        const dataPrevistaTermino = new Date(req.body.dataPrevistaTermino)
        // concluido = new Boolean(concluido)

        const response = await atualizarTarefa(id, titulo, dataPrevistaTermino, descricao, concluido)

        response.data == 0
            ? res.json({ msg: "Erro ao atualizar tarefa", code: 400, response }).status(400)
            : res.json({ msg: "Tarefa atualizada com sucesso", code: 200, response }).status(200)

    }
    catch (err) {
        res.json({ err: err, code: 500 }).status(500)

    }

})

router.delete("/tarefa", async (req, res) => {

    try {
        const { id } = req.body
        const dataPrevistaTermino = new Date(req.body.dataPrevistaTermino)

        const response = await deletarTarefa(id)

        response.data == 0
            ? res.json({ msg: "Erro ao deletar tarefa", code: 400, response }).status(400)
            : res.json({ msg: "Tarefa deletada com sucesso", code: 200, response }).status(200)

    }
    catch (err) {
        res.json({ err: err, code: 500 }).status(500)

    }

})


module.exports = router