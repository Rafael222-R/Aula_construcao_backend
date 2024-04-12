const express = require("express");
const router = express.Router();

const listaTarefas = ["Limpar a casa", "Varrer a Calçada", "Lavar o Carro", "Estudar Para a Faculdade"];

router.get("/tarefas" , (req, res) => {
    res.json(listaTarefas)

})

router.get("/tarefas/:id", (req, res) => {
    const id = req.params.id
  //  const tarefas = listaTarefas.find(tarefas => tarefas.id == id);
    
    res.json(listaTarefas[id])
})


router.post("/tarefas", (req, res) => {
    const tarefa = req.body
    listaTarefas.push(tarefa.tarefa)
    res.json({mensagem: "Nova Tarefa criada com Sucesso"})
})


router.put("/tarefas/:id", (req, res) => {
    const id = req.params.id;
    const tarefaAlterada = req.body;
    listaTarefas[id] = tarefaAlterada.tarefa
    res.json({mensagem: "Tarefa Alterada"})
})

router.delete("/tarefas/:id", (req, res) => {
    const id = req.params.id
    listaTarefas.splice(id, 1)

    res.json({mensagem: "Tarefa Excluida com Sucesso"})
})



module.exports = router 