const express = require('express')
const app = express()
const PORT = 3000

const DBConnect = require('./databse/connection')
DBConnect()

app.use(express.json())


const Routes = require("./routes/routes")
app.use(Routes)

app.use("/test", (req, res) => {
    res.send('Tudo Funcionando ate aqui')
})





app.listen (PORT, () => {
    console.log(`Aplicação Rodando na Porta ${PORT}`)
})