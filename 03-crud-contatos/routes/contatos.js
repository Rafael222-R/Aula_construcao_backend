const express = require("express");
const router = express.Router();

//"Banco de dados Local" lista mackada
const listaContatos = ["João", "Pedro", "Rafael"];

// comando para visualizar o nome dentro do array
//console.log(listaContatos[2])

//rotas READ -> Buscar todos os contatos
router.get('/contatos', (req, res) => {
    res.json(listaContatos)
})

//Busca de contatos pela id
router.get('/contatos/:id', (req, res) => {
    const id = req.params.id
    res.json(listaContatos[id])

})

// CREATE -> CRIAR UM CONTATO

router.post("/contatos", (req, res) => {
    const contato = req.body
    listaContatos.push(contato.nome)
    res.json({mensagem: "Contato criando cpom sucesso!"})
})

//DELETE -> Deletar um contato
router.delete("/contatos/:id", (req, res) => {
    const id = req.params.id
    listaContatos.splice(id, 1)
    res.json({mensagem : "Contato Excluido com Sucesso!"})
})

router.put("/contatos/:id", (req, res) => {
    const id = req.params.id
    const contatoAlterado = req.body
    listaContatos[id] = contatoAlterado.nome
    res.json({mensagem : "Contato Alterado com Sucesso!!"})
})

module.exports = router