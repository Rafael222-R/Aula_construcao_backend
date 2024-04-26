const express = require ("express");
const router = express.Router();


listaFuncionarios = [
    {
        id:1,
        nome: "Rafael Dias",
        email: "rafael@hotmail.com",
        telefone: 61991907898,
        cargo: "Vendedor",
        salario: 5000.00
    },

    {
        id:2,
        nome: "Francisco",
        email:"francisco@gmail.com",
        telefone: 6134033434,
        cargo: "Gerente",
        salario: 20000.00


    }
]


router.get("/funcionarios", (req, res) => {
    res.json(listaFuncionarios)
})


router.get("/funcionarios/:id", (req, res) => {
    const id = req.params.id;
    const funcionario = listaFuncionarios.find(funcionario => funcionario.id == id )
    if(funcionario) {
        return res.json(funcionario)
    }

    return res.status(404).json({mesagem: "Funcionario não encontrado"})
})

router.post("/funcionarios", (req,res) => {
    const cadastro = req.body

    if (!cadastro.nome || !cadastro.email || !cadastro.telefone || !cadastro.cargo || !cadastro.salario) {
        return res.status(400).json({mensagem: "Nome, E-mail, Telefone, Cargo, Salario são Obrigatorios"})
    }

    const novoFuncionario = {
        id: Math.round(Math.random() * 500),
        nome: cadastro.nome,
        email: cadastro.nome,
        telefone: cadastro.telefone,
        cargo: cadastro.cargo,
        salario: cadastro.salario

    }

    listaFuncionarios.push(novoFuncionario)

    res.json({
        mensagem: "Novo Funcionario Cadastrado com Sucesso",
        novoFuncionario:novoFuncionario
    })
})


router.put("/funcionarios/:id", (req,res) => {
    const id = req.params.id;
    const dados = req.body;

    if(!dados.nome || !dados.email || !dados.telefone || !dados.cargo || !dados.salario) {
        return res.status(400).json({ mensagem: "Nome, E-mail, Telefone, Cargo, Salario são Obrigatorios" })
    }

    const index = listaFuncionarios.findIndex(funcionario => funcionario.id == id) 
    if(index == -1) {
        return res.status(404).json ({ mensagem: "Funcionario não encontrado"})
    }

    const funcionarioAtualizado = {
        id: Number(id),
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,
        cargo: dados.cargo,
        salario: dados.salario
    }

    listaFuncionarios[index] = funcionarioAtualizado;

    res.json({
        mensagem: "Funcinario Atuzalizado com Sucesso",
        funcionario: funcionarioAtualizado
    })
})

router.delete("/funcionarios/:id" , (req, res) => {
    const id = req.params.id;
    const index = listaFuncionarios.findIndex(funcionario => funcionario.id == id)
    if(index == -1) {
        return res.status(404).json ({ mensagem: "Funcionario não encontrado"})
    }

    listaFuncionarios.splice(index, 1)
    res.json({mensagem: "Funcionario Excluido com Sucesso"})
})


//Criar uma rota e implementação para busca de todos os funcionários 
//do mesmo cargo (GET /funcionarios/cargo/:cargo)

router.get("/funcionarios/cargo/:cargo" , (req, res) => {
    const cargo = req.params.cargo;
    const funcionarios = listaFuncionarios.filter(funcionario => funcionario.cargo.toLowerCase() == cargo.toLowerCase()) 
    res.json(funcionarios)
    
})


//Criar uma rota e implementação para calcular e retornar a 
//média salarial de todos os funcionários da lista 
// (GET /funcionarios/salarios/media)


router.get("/funcionarios/salario/media", (req, res) => {


 const salario = req.params.salario;
 const totalSalarios = listaFuncionarios.reduce((total, funcionario) => total + funcionario.salario, 0);
 const mediaSalarios = totalSalarios / listaFuncionarios.length;

 
 res.json({ media_salarios: mediaSalarios });



})
   
























module.exports = router