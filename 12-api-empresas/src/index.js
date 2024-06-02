const express = require ('express')
const app = express ()
const PORT = 3000

const DBConnect = require('./database/connection')
DBConnect()

app.use(express.json())


const Routes = require("./routes/routes")
app.use(Routes)





app.listen ( PORT, () => {
    console.log(`Aplicação Rodando na Porta ${PORT}`)
})