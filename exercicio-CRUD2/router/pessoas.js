const express = require("express")
const router = express.Router()

const listaPessoas = [
    {
        "nome" : "Joao",
        "idade" : 20,
        "email" : "joao@email.com",
        "telefone": 61900001256
    },
    {
        "nome" : "Rafael Dias",
        "idade" : 25,
        "email" : "rafael@gmail.com",
        "telefone" : 61995652530
    }
]


router.get('/pessoas', (req, res) => {

    res.json(listaPessoas)
})

router.get("/pessoas/:id" , (req,res) =>{
        const id = req.params.id
        const cadastro = listaPessoas.find(cadastro => cadastro.id == id);

        res.json(cadastro)
})





module.exports = router
