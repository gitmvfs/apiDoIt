const { recuperarUsuario, criarUsuario, atualizarUsuario } = require("../controller/usuario")

const router = require("express").Router()


router.get("/usuario", async (req, res) => {

    try {
        const response = await recuperarUsuario()
        console.log(response.data)
        res.json(response).status(200)
    }
    catch (err) {
        res.json({ err: err, code: 500 }).status(500)
    }
})

router.put("/usuario", async (req, res) => {

    try {

        const { nome, tema } = req.body

        console.log(req.body)

        const response = await criarUsuario(nome, tema)

        response.data == 0 
        ? res.json({ msg: "Erro ao atualizar usuario", code: 400, response }).status(400) 
        : res.json({ msg: "Usuario atuallizado com sucesso", code: 200, response }).status(200)
    }
    catch (err) {
        console.log(err)
        res.json({ err: err, code: 500 }).status(500)
    }
})

router.put("/usuario", async (req, res) => {

    try {

        const { nome, tema } = req.body

        console.log(req.body)

        const response = await atualizarUsuario(nome, tema)

        response.data == 0 
        ? res.json({ msg: "Erro ao atualizar usuario", code: 400, response }).status(400) 
        : res.json({ msg: "Usuario atuallizado com sucesso", code: 200, response }).status(200)
    }
    catch (err) {
        console.log(err)
        res.json({ err: err, code: 500 }).status(500)
    }
})


module.exports = router