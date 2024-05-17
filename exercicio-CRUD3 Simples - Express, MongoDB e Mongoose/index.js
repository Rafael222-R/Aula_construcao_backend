const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const PORT = 3000
const app = express()

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME


mongoose.connect(`mongodb+srv://Banco_atividade3:1KXLFoPCQCC5l0ah@blackiesb.odubskr.mongodb.net/?retryWrites=true&w=majority&appName=blackiesb`)
    .then(() => console.log("Conectado ao banco Mongo!"))
    .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))


    app.use(express.json())


    const Pessoas = mongoose.model('Pessoas', { nome: String })

    app.post('/pessoas', async (req, res) => {
        const pessoa = new Pessoas(req.body)
        const pessoaCriada = await pessoa.save()
        res.status(201).json(pessoaCriada)
    })

    app.get('/pessoas', async (req, res) => {
        const pessoas = await Pessoas.find()
        res.json(pessoas)
    })

    app.get('/pessoas/:id', async (req, res) => {
        const pessoa = await Pessoas.findById(req.params.id)
        res.json(pessoa)
    })

    app.delete('/pessoas/:id', async (req, res) => {
        await Pessoas.findByIdAndDelete(req.params.id)
        res.json({ mensagem: "Pessoa excluida com sucesso!" })
    })

    app.put('/pessoas/:id', async (req, res) => {
        const pessoaAtualizada = await Pessoas.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(pessoaAtualizada)
    })




    app.listen(PORT, () => {
        console.log(`Aplicação rodando na porta ${PORT}`)
    })



