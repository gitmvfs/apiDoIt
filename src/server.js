const express = require("express")
const app = express()
const cors = require("cors")

//Conf dos middleware

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use()

//Conf das rotas

express.listen(5500,()=> console.log(`Servidor aberto em: 5500`))