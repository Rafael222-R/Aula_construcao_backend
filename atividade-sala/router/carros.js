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
    if (carro) {
        return res.json(carro)
    }
    return res.status(404).json({mensagem: "Carro não encontrado"})
})

router.post("/carros", (req, res) => {
    const carro = req.body
    
    const NovoCarro = {
        id:listaCarros.length +1,
        marca: carro.marca,
        modelo: carro.modelo,
        cor: carro.cor,
        valor: carro.valor,
     }

    listaCarros.push(NovoCarro)

     res.json(NovoCarro)
})

router.put("/carros/:id", (req, res) => {
    const id = req.params.id
    const attCarro = req.body

    const index = listaCarros.findIndex(attCarro => attCarro.id == id)

    const carroAtualizado = {
        id: Number(id),
        marca: attCarro.marca,
        modelo: attCarro.modelo,
        cor: attCarro.cor,
        valor: attCarro.valor
    }

listaCarros[index] = carroAtualizado
    res.json({mensagem:"Carro Atualizado com Sucesso!"})

})

router.delete("/carros/:id", (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(Carro => Carro.id == id)
    listaCarros.splice(index, 1)
    res.json({mensagem: "Carro excluído com sucesso"})
})

module.exports =  router