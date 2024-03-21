// importando modulo do express
const express = require('express')

// cria uma aplicação express
const app = express()

// construir a lógica (o contrato da minha api)
app.get("/hello", (req, res) => {
    res.send("Hello World!")
})

app.get("/nome", (req, res) => {
    res.send("João Paulo!")
})

app.post("/teste", (req, res) => {
    res.send("TESTE POST OK!")
})

app.get('/aluno', (req, res) => {
    res.send('Aluno: Rafael Dias - Matricula: 23114290012')
})
// codigo feito pelo professor na sala de aula
// PATH PARAM /pessoa/gustavo/20
app.get('/pessoa/:nome/:idade', (req, res) => {
    console.log(req.params)
    const nomePessoa = req.params.nome
    const idadePessoa = req.params.idade
    let mais18 = null
    if (idadePessoa >= 18){
        mais18 = "Maior de idade"
    } else {
        mais18 = "Menor de idade"
    }
    res.send(`
    Olá ${nomePessoa}! Tudo bem?
    Você é ${mais18}`)
})

//QUERY PARAM /pessoa?nome=gustavo&idade=20
app.get('/pessoa', (req, res) => {
    console.log(req.query)
    const nomePessoa = req.query.nome
    const idadePessoa = req.query.idade
    let mais18 = null
    if (idadePessoa >= 18) {
        mais18 = "Maior de idade"
    } 
    else {
        mais18 = "Menor de idade"
    }
    res.send(`
    Olá ${nomePessoa}! Tudo bem?
    Você é ${mais18}
    `)
})

/* PARA CASA
1. Faça uma api que receba quatro notas de um aluno, calcule e responda a média aritmética das notas e a mensagem
 de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0. 
*/


// codifo copiado do chat gpt
app.post('/calcular-media/:nota1/:nota2/:nota3/:nota4', (req, res) => {
    console.log(req.params)
    const nota1 = req.params.nota1
    const nota2 = req.params.nota2
    const nota3 = req.params.nota3
    const nota4 = req.params.nota4

    if (nota1 === undefined || nota2 === undefined || nota3 === undefined || nota4 === undefined) {
        return res.status(400).json({ erro: 'As quatro notas devem ser fornecidas.' });
    }

    if ([nota1, nota2, nota3, nota4].every(nota => typeof nota == 'number')) {
        return res.status(400).json({ erro: 'As notas devem ser números.' });
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    const mensagem = media >= 7.0 ? 'Aprovado' : 'Reprovado';

    res.send({ media, mensagem });
});





// startando servidor(backend - api) para escutar comunicações
// na porta 3000
app.listen(3000, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
})