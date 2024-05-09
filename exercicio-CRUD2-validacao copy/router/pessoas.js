const express = require("express")
const router = express.Router()

const listaPessoas = [
    {
        "id": 1,
        "nome": "Joao",
        "idade": 20,
        "email": "joao@email.com",
        "telefone": 61900001256
    },
    {
        "id": 2,
        "nome": "Rafael Dias",
        "idade": 25,
        "email": "rafael@gmail.com",
        "telefone": 61995652530
    }
]




function validarpessoa(req, res, next) {
    const id = req.params.id;
    const cadastro = listaPessoas.find(cadastro => cadastro.id == id);
    const index = listaPessoas.findIndex(cadastro => cadastro.id == id);
    if (cadastro) {
        res.cadastro = cadastro
        res.index = index
        return next()
    }
    return res.status(404).json({ mensagem:  "Cadastro não Encontrado" })
}


function validarAtributos(req, res, next) {
    const dadosPessoas = req.body
    if (!dadosPessoas.nome || !dadosPessoas.idade || !dadosPessoas.email || !dadosPessoas.telefone) {
        return res.status(400).json({ mensagem: "Nome, Idade, E-mail, Telefone tem que ser informados" })
    }
    return next()
}




router.get('/pessoas', (req, res) => {

    res.json(listaPessoas)
})

router.get("/pessoas/:id", validarpessoa, (req, res) => {
     res.json(res.cadastro)
})

router.post("/pessoas", validarAtributos, (req, res) => {
    const dadosPessoas = req.body

 console.log(req.body);

    const novaPessoas = {
        id: Math.round(Math.random() * 500),
        nome: dadosPessoas.nome,
        idade: dadosPessoas.idade,
        email: dadosPessoas.email,
        telefone: dadosPessoas.telefone

    }

    listaPessoas.push(novaPessoas);

    res.json({
        mensagem: "Cadastro atualizado com Sucesso",
        novaPessoas

    })
})

router.put("/pessoas/:id",validarAtributos, validarpessoa, (req, res) => {
    
    const dadosPessoas = req.body

    
    const novaPessoas = {
        id: res.cadastro.id,
        nome: dadosPessoas.nome,
        idade: dadosPessoas.idade,
        email: dadosPessoas.email,
        telefone: dadosPessoas.telefone
    }

    listaPessoas[res.index] = novaPessoas

    res.json({
        mensagem: "Cadastro Atualizado com Sucesso!",
        novaPessoas
    })


})

router.delete("/pessoas/:id", validarpessoa, (req, res) => {
    
    listaPessoas.splice(res.index, 1)
    res.json({
        mensagem: " Cadastro Excluido com Sucesso!"
    })
})



module.exports = router
