const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors');



const DBConnect = require('./databse/connection')
DBConnect()

app.use(cors());
app.use(express.json())
/*
const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checkToken } = require('./validators/AutenticacaoValidator')
*/
const Routes = require("./routes/routes")
app.use( Routes)

app.use("/test", (req, res) => {
    res.send('Tudo Funcionando ate aqui')
})





app.listen (PORT, () => {
    console.log(`Aplicação Rodando na Porta ${PORT}`)
})