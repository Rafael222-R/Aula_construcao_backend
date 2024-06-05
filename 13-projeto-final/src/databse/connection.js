const mongoose = require('mongoose')
require('dotenv').config()

function main () {
    mongoose.connect("mongodb+srv://projeto_final:jtUG2O2GAwppWfDN@blackiesb.odubskr.mongodb.net/projeto_final?retryWrites=true&w=majority&appName=blackiesb")
    .then(() => console.log("Conectado ao Banco Mongo!"))
    .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))
}


module.exports = main

