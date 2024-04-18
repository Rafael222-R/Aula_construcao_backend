const express = require("express")
const router = express.Router();

/*
const listaCarros = [
{ 
    "id": 0,
    "Marca": "Fiat",
    "Modelo":"Palio",
    "Cor": "Vermelho",
    "Valor": 20000
},

{
    "id": 1,
    "Marca": "Volkswagen",
"Modelo":"Gol",
"Cor": "Branco",
"Valor": 25000

}
]



router.get("/carros", (req, res) => {

    res.json(listaCarros)
})



router.get("/carros/:id", (req, res) => {
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id )

    if (carro) {
        return res.json(carro)
    }
    return res.status(404).json({mensagem: "Carro não encontrado"})
})



router.post("/carros", (req, res) => {
    const carro = req.body
    
    if (!carro.marca || !carro.modelo  || !carro.cor || !carro.valor) {
        return res.status(400).json({mensagem: "E necessario informa a marca,modelo,cor e valor do Carro"})
    }

    const NovoCarro = {
        id:listaCarros.length +1,
        marca: carro.marca,
        modelo: carro.modelo,
        cor: carro.cor,
        valor: carro.valor,
     }

    listaCarros.push(NovoCarro)

    return res.status(201).json({
        mensagem: "Novo carros Criado",
        NovoCarro
    })
})



router.put("/carros/:id", (req, res) => {
    const id = req.params.id
    const attCarro = req.body

if (!attCarro.marca || !attCarro.modelo || !attCarro.cor || !attCarro.valor) {
    return res.status(400).json({mensagem: " E necessario informa a marca,modelo,cor e valor do Carro"})
}

    const index = listaCarros.findIndex(attCarro => attCarro.id == id)

    if(index == -1) {
        return res.status(404).json({mensagem: " Carro não encontrado"})
    }

    const carroAtualizado = {
        id: Number(id),
        marca: attCarro.marca,
        modelo: attCarro.modelo,
        cor: attCarro.cor,
        valor: attCarro.valor
    }

listaCarros[index] = carroAtualizado

   return  res.status(201).json({
    mensagem:"Carro Atualizado com Sucesso!",
    carroAtualizado

})

})

router.delete("/carros/:id", (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(Carro => Carro.id == id)

if (index == -1) {
    return res.status(404).json({mensagem: "Carro não encontrado"})
}

    listaCarros.splice(index, 1)
    return res.status(201).json({mensagem: "Carro excluído com sucesso"})
})
*/



// DESSA PARTE PARA BAIXO FOI A RESOLUÇÃO FEITO PELO PROFESSOR EM SALA
let listaCarros = [
    {
        id: 1,
        marca: "Fiat",
        modelo: "Marea BOMBA",
        cor: "Vermelho",
        valor: 30000.00
    },
    {
        id: 2,
        marca: "Honda",
        modelo: "Civic",
        cor: "Preto",
        valor: 120000.00
    }
]

// READ -> Buscar todos os carros
router.get('/carros', (req, res) => {
    res.json(listaCarros)
})

// READ -> Busca de carro por id
router.get('/carros/:id', (req, res) => {
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id)
    if (carro) {
        return res.json(carro)
    }
    return res.status(404).json({ mensagem: "Carro não encontrato!" })
})

// CREATE -> Cadastro de carro
router.post('/carros', (req, res) => {
    const dados = req.body

    if (!dados.modelo || !dados.marca || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "Marca, modelo, cor e valor são obrigatórios" })
    }

    const carro = {
        id: Math.round(Math.random() * 1000),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros.push(carro)

    res.json({
        mensagem: "Carro cadastrado com sucesso!",
        carro: carro
    })
})


// UPDATE -> Atualização de carro
router.put('/carros/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body

    if (!dados.modelo || !dados.marca || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "Marca, modelo, cor e valor são obrigatórios" })
    }

    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrato!" })
    }

    const carroAtualizado = {
        id: Number(id),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros[index] = carroAtualizado

    res.json({
        mensagem: "Carro atualizado com sucesso!",
        carro: carroAtualizado
    })
})


// DELETE -> Excluir um carro
router.delete('/carros/:id', (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrato!" })
    }

    listaCarros.splice(index, 1)
    res.json({ mensagem: "Carro excluído com sucesso!" })
})

// READ -> Buscar todos os carros de uma determinada cor
router.get('/carros/cor/:cor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())
    res.json(carros)
})

// READ -> Buscar o valor somado(total) de todos os carros de uma determinada cor
router.get('/carros/cor/:cor/valor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())

    let valorTotal = 0
    carros.forEach(carro => {
        valorTotal = valorTotal + carro.valor
    })

    res.json({
        quantidade: carros.length,
            valor: valorTotal
        })
})

module.exports =  router