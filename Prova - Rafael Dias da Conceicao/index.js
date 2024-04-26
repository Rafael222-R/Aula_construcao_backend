const express = require("express");
const app = express()

app.use(express.json());




const funcionariosRouter = require("./router/lista-funcionarios");
app.use(funcionariosRouter)




app.get("/test" , (req, res) =>{
        res.json("ok")
})

app.listen(3000, () => {
    console.log("Api Rodando em http://localhost:3000")
})