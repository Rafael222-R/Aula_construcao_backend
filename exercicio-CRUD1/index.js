const express = require ("express");
const app = express();

app.use( express.json ());



const tarefasRouter = require("./router/lista-tarefas");
app.use(tarefasRouter)

app.get("/test" , (req, res) =>{
    res.json("Tudo Certo!")
})

app.listen(3000, () => {
    console.log("API Rodando em http://localhost:3000")
})