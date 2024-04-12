const express = require("express");
const router = express.Router();

const listaProduto = [
    {
        id : 1,
        nome : "Arroz",
        preço : 29.99

    },
    {

        id : 2,
        nome : "Feijão",
        preço : 7.99
    },

    {
        id : 3,
        nome : "Cadeira Gamer",
        preço : 1999.99
    }
]

//READ -> Buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.json(listaProduto)
})

//READ -> Buscando produtos pela id
router.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    const produto = listaProduto.find(produto => produto.id == id);
    res.json(produto)
})

//CREAT -> Criar um novo produto
router.post('/produtos', (req, res) => {
    const dadosProdutos = req.body
    
    const novoProduto = {
        id: listaProduto.length + 1, //usar o .length para o ID seja incrementado de forma automativa, foi colocar o +1 para que seja acrescentado mais 1 
        nome : dadosProdutos.nome,
        preço: dadosProdutos.preço
    }

    listaProduto.push(novoProduto)


// respondendo com um Objeto mensagem
    res.json({mensagem: "Produto Criado com Sucesso"})
})

//UPDATE -> ATUALIZAR PRODUTOS

router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaProduto.findIndex(produto => produto.id == id )

    const produtoAtualizado = {
        id: Number(id),
        nome: novosDados.nome,
        preço: novosDados.preço
    }

    listaProduto[index] = produtoAtualizado

    res.json ({
        mensagem:"Produto Atualizado com Sucesso "
    })



})

module.exports = router 