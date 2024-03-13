const express = require("express")
const app = express()
const cors = require("cors")

//import das rotas
const rota_usuario = require("./routes/user")
const rota_tarefa = require("./routes/tarefas")
const rota_contagem = require("./routes/contagem")

//Conf dos middleware

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Conf das rotas

app.use("", rota_usuario)
app.use("", rota_tarefa)
app.use("", rota_contagem)
app.get("",(req,res) =>{

    res.json({ApiStatus:"Ok" ,"link docs": "https://github.com/gitmvfs/apiDoIt" })
})

app.listen(5500, () => console.log(`Servidor aberto em: 5500`))