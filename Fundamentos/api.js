// Importando modulo core HTTP
const http = require('http')

let contador = 0
console.log("Contador iniciado!")
console.log("Contador de Requisições: 0")

// criando um servidor(backend - api) atraves do modulo http
http.createServer((req, res) => {

    // construindo a lógica da api
    // Qualquer requisição que chegue, monta uma respota e devolve
    contador++
    console.log("Contador de Requisições: " + contador)
    res.write(`Você é o visitante numero: ${contador}`)
    res.end()

// startando servidor(backend - api) para escutar comunicações
// na porta 3000
}).listen(3000)
