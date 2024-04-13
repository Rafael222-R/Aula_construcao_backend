const express = require("express")
const router = express.Router();


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

module.exports =  router