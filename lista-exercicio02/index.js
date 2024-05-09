const express = require("express");
const app = express()


app.use(express.json());


app.get("/test", (req, res) => {
    res.send("Teste ok")
})

app.get("/exercicio1", (req, res) => {
    res.send("atividade chata")
})

app.listen(3000, () =>{
    console.log("Api Iniciando!! Rodando em http://localhost:3000")
})