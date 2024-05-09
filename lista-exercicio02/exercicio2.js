const express = require('express');
const app = express();

app.use(express.json());

app.get('/exercicio2', (req, res) =>{
    res.send("ok")
})

app.listen(3000, () =>{
    console.log("Api iniciado!! Rodando em http://localhost:3000")
})