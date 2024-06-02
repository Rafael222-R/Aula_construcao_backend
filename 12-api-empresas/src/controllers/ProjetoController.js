const Projeto = require("../models/projeto")

async function buscarTodos(req, res) {
    res.json(await Projeto.find())
}

async function buscarPorID(req, res) {
    const projeto = await Projeto.findById(req.params.id)
    if(projeto) {
        res.json(projeto)
    } else {
        res.status(404).json({mensagem: "Projeto não encontrado"})
    }
}

async function criar(req, res) {
    const projeto = new Projeto(req.body)
    const projetoCriado = await projeto.save()
    res.status(201).json(projetoCriado)
}

async function atualizar(req, res) {
    const projetoAtualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (projetoAtualizado) {
        res.json(
            {
                mensagem: "Projeto atualizado com sucesso!",
                projetoAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Projeto não encontrado!" })
    }
}

async function excluir(req, res) {
    const projetoExcluido = await Projeto.findByIdAndDelete(req.params.id)
    if (projetoExcluido) {
        res.json(
            {
                mensagem: "Projeto excluido com sucesso!",
                projetoExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Projeto não encontrado!" })
    }
}



module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir

}