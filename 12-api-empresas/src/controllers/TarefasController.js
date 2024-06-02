const Tarefa = require('../models/Tarefas')

async function buscarTodos(req, res) {
    res.json(await Tarefa.find().populate(['funcionario', 'projeto']))
}

async function buscarPorID(req, res) {
    const Tarefa = await Funcionario.findById(req.params.id).populate(['funcionario', 'projeto'])
    if (Tarefa) {
        res.json(Tarefa)
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }
}

async function criar(req, res) {
    const Tarefa = new Funcionario(req.body)
    const tarefaCriado = await Tarefa.save()
    res.status(201).json(tarefaCriado)
}

async function atualizar(req, res) {
    const tarefaAtulizado = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (tarefaAtulizado) {
        res.json(
            {
                mensagem: "Tarefa atualizado com sucesso!",
                funcionarioAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }
}


async function excluir(req, res) {
    const tarefaExcluido = await Tarefa.findByIdAndDelete(req.params.id)
    if (tarefaExcluido) {
        res.json(
            {
                mensagem: "Tarefa excluido com sucesso!",
                funcionarioExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }
}


module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}

/*
const Tarefa = require('../models/Tarefa')



async function create(req, res) {
    const tarefa = new Tarefa(req.body)
    const tarefaCriado = await tarefa.save()
    res.status(201).json(tarefaCriado)
}


async function update(req, res) {
    const tarefaAtulizado = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (tarefaAtulizado) {
        res.json(tarefaAtulizado)
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrato!" })
    }

}

async function remove(req, res) {
    const tarefaExcluido = await Tarefa.findByIdAndDelete(req.params.id)
    if (tarefaExcluido) {
        res.json({
            mensagem: "Tarefa excluido com sucesso!",
            tarefaExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}

*/