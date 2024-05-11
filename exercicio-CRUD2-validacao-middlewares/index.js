const express = require("express");
const app = express();

app.use(express.json())

const pessoasRouter = require("./router/pessoas")
app.use(pessoasRouter)

app.get("/Test", (req, res) =>{
    res.json("Tudo Funcionando Ate o momento!!")
})


app.listen(3000,() =>{
    console.log("API Rodando em http://localhost:3000")
})