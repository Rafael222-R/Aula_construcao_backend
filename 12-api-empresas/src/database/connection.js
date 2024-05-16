
const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

function main() {
    mongoose.connect(`mongodb+srv://rafael_trabalho:46wQsdQ8iUWfmd22@blackiesb.odubskr.mongodb.net/?retryWrites=true&w=majority&appName=blackiesb`)
        .then(() => console.log("Conectado ao banco Mongo!"))
        .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))
}

module.exports = main
