const Cliente = require('../models/Clientes')


async function buscarTodos(req, res) {
    res.json(await Cliente.find())
}

async function buscarPorID(req, res) {
    const cliente = await Cliente.findById(req.params.id)
    if(cliente) {
        res.json(cliente)
    }else{
        res.status(404).json({mensagem: "Cliente não encontrado"})
    }
}

async function criar(req, res) {
    const cliente = new Cliente(req.body)
    const clienteCriado = await cliente.save()
    res.status(201).json(clienteCriado)
}

async function atualizar(req, res) {
    const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (clienteAtualizado) {
        res.json(
            {
                mensagem: "Cliente atualizado com sucesso!",
                clienteAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Cliente não encontrado!" })
    }
}

async function excluir(req, res) {
    const clienteExcluido = await Cliente.findByIdAndDelete(req.params.id)
    if (clienteExcluido) {
        res.json(
            {
                mensagem: "Cliente excluido com sucesso!",
                clienteExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Cliente não encontrado!" })
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir

}
