const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required:true
    },
    descricao: {
        type: String,
        require: false
    },
    salario: {
        type: Number,
        required: true
    },
    habilidade:{
        type: String,
        require: false
    },
    status_cargo: {

        type: String,
        required:true
    }
}, {timestamps: true})
 
const Cargo = mongoose.model('cargo', schema)

module.exports = Cargo