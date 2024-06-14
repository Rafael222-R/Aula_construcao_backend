const mongoose = require("mongoose")

const schema = new mongoose.Schema (
    {

    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        require: false
    },
    codigo_barras : {
        type: String,
        require: true
    },
    peso: {
        type : Number,
        require: true
    },
    preco : {
        type : Number,
        require: true
    }
}, { timestamps: true})


const Produto = mongoose.model('produto', schema)




module.exports = Produto