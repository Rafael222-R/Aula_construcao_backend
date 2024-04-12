const express = require ("express"); // importando a biblioteca express 
const app = express(); // função para usar a biblioteca da express na app

// middleware
app.use(express.json())

// rotas 

//com isso vc consegue rodas outras bibliotecas
//exemplos usado pelo professo foi o a pasta router junto com os arquivos de contato e produtos feito na aula do dias 10/04
const produtosRouter = require("./router/produtos")
app.use(produtosRouter)

app.listen(3000, ()=> {
    console.log("Aplicanção Rodando em http://localhost:3000")
})