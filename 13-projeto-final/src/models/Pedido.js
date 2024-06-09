const mongoose = require('mongoose')

const schema = new mongoose.Schema(
{
    funcionario: {
        type: mongoose.Types.ObjectId,
        ref: 'funcionario',
        required: true
    },
    cliente: {
        type: mongoose.Types.ObjectId,
        ref:'cliente',
        required: true
    },
    items : [{

     produto: {
        type: mongoose.Types.ObjectId,
        ref:'produto',
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }

    }]
   
} , {timestamps : true})

const Pedido = mongoose.model('pedido', schema)

module.exports = Pedido
