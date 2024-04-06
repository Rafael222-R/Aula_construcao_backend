
// para importa o express
const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.json("OK")
})

const contatosRouter = require("./routes/contatos")
app.use(contatosRouter)

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")

})