const express = require("express")
const app = express()
const cors = require("cors")

//import das rotas
const rota_usuario = require("./routes/user")

//Conf dos middleware

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Conf das rotas

app.use("",rota_usuario)

app.listen(5500,()=> console.log(`Servidor aberto em: 5500`))