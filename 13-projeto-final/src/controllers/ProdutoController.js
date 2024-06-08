const Produto = require("../models/Produtos.js")

async function criar(req, res) {
    const produto = new Produto(req.body)
    const produtoCriado = await produto.save()
    res.status(201).json(produtoCriado)
}

async function buscarTodos(req, res) {
    res.json(await Produto.find())
}

async function buscarPorID(req, res) {
    const produto = await Produto.findById(req.params.id)
    if(produto) {
        res.json(produto)
    } else {
        res.status(404).json({mensagem: "Produto não encontrado"})
    }
}

async function atualizar(req, res) {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (produtoAtualizado) {
        res.json(
            {
                mensagem: "Produto atualizado com sucesso!",
                produtoAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrado!" })
    }
}

async function excluir(req, res) {
    const produtoExcluido = await Produto.findByIdAndDelete(req.params.id)
    if (produtoExcluido) {
        res.json(
            {
                mensagem: "Produto excluido com sucesso!",
                produtoExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Produto não encontrado!" })
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir

}