const mongoose = require('mongoose')
require('dotenv').config()

function main () {
    mongoose.connect("mongodb+srv://prova1:dsngeamqfM4OMGfc@blackiesb.odubskr.mongodb.net/prova1?retryWrites=true&w=majority&appName=blackiesb")
    .then(() => console.log("Conectado ao Banco Mongo!"))
    .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))
}


module.exports = main

