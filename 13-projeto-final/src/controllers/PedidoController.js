const Pedido = require('../models/Pedido')
const Produto = require('../models/Produtos')


async function criar(req, res) {
    
    const {funcionario, cliente, items } = req.body
    const pedido = new Pedido( {funcionario, cliente, items })
    const pedidoCriado = await pedido.save()
    res.status(201).json(pedidoCriado)
 
}

async function buscarTodos(req, res) {
    res.json(await Pedido.find() 
    .populate({
        path: 'funcionario',
        select: 'nome'
    })
    .populate({
        path: 'cliente',
        select: 'nome'  
    })
    .populate({
        path: "items.produto",
        select: "nome"
        
    })

)

}


async function buscarPorID(req, res) {
    const pedido = await Pedido.findById(req.params.id).populate({
        path: 'funcionario',
        select: 'nome'  // Seleciona apenas o campo 'nome' do documento 'funcionario'
    })
    .populate({
        path: 'cliente',
        select: 'nome'  // Seleciona apenas o campo 'nome' do documento 'cliente'
    }); 
    if (pedido) {
        res.json(pedido)
    } else {
        res.status(404).json({ mensagem: "Pedido não encontrado!" })
    }
}


async function atualizar(req, res) {
    const pedidoAtualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (pedidoAtualizado) {
        res.json(
            {
                mensagem: "Pedido atualizado com sucesso!",
                pedidoAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Pedido não encontrado!" })
    }
}

async function excluir(req, res) {
    const pedidoExcluido = await Pedido.findByIdAndDelete(req.params.id)
    if (pedidoExcluido) {
        res.json(
            {
                mensagem: "Funcionario excluido com sucesso!",
                pedidoExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!" })
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}
