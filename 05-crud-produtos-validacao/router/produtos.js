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
    if (produto) {
        // O uso do Return eliminar a formar de utlilizar if , else. O Uso do return deixar o codigo menos bifurcado 
   return res.json(produto) 
}
return res.status(404).json({mensagem: "Produto não Encontrado"})
})



//CREAT -> Criar um novo produto
router.post('/produtos', (req, res) => {
    const dadosProdutos = req.body
// usamos a função a baixo para todos os campos seja incerido pelo front-end
    if(!dadosProdutos.nome || !dadosProdutos.preço){
        return res.status(400).json({mensagem: " Nome e Preço são Obrigatorios!"})
    }
    
    const novoProduto = {
        id: Math.round(Math.random() * 1000), //usar o .length para o ID seja incrementado de forma automativa, foi colocar o +1 para que seja acrescentado mais 1 
        nome : dadosProdutos.nome,
        preço: dadosProdutos.preço
    }

    listaProduto.push(novoProduto)

// respondendo com um Objeto mensagem
    return res.status(201).json(
        {
            mensagem: "Produto Criado com Sucesso",
            novoProduto
        
        })
})

//UPDATE -> ATUALIZAR PRODUTOS

router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

// novamento usamos a função a baixo para garantir a entrada de dados pelo usuario
    if(!novosDados.nome || !novosDados.preço) {
        return res.status(400).json({mensagem: "Nome e Preço são Obrigatorios"})
    } 

    const index = listaProduto.findIndex(produto => produto.id == id )

    if(index == -1) {
        return res.status(404).json({mensagem: "Produtos não Encontrado"})
    }

    const produtoAtualizado = {
        id: Number(id),
        nome: novosDados.nome,
        preço: novosDados.preço
    }

    listaProduto[index] = produtoAtualizado

    res.json ({
        mensagem:"Produto Atualizado com Sucesso ",
        produtoAtualizado
    })

})

router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProduto.findIndex(produto => produto.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "produto não encontrado!" })
    }
    listaProduto.splice(index, 1)
    res.json({ mensagem: "Produto excluido com sucesso!" })
})



module.exports = router 