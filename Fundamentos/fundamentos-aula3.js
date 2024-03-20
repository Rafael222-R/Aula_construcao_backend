// Imprimindo informações no terminal (log ou console)
console.log("TESTE")

// Variáveis
// var, const e let
// var (comando antigo)
var testandoVar = "testanoVar"
console.log(testandoVar)

// const -> criar uma constante(variável que não sofre alterações)
const PI = 3.14
// PI = 9999 

console.log(PI)

// let -> criar uma variável que pode sofrer alterações
let nomeCompleto
console.log(nomeCompleto)
nomeCompleto = "Gustavo"
console.log(nomeCompleto)
nomeCompleto = "Gustavo Clay"
console.log(nomeCompleto)

/* 

    TIPOS DE DADOS

*/
// String
//     -> 'DASDSA' "ASDDASD" `ASDASDAS ${COMANDO EM JAVASCRIPT}`
// Number
//     -> 1 1.2 -12
// Boolean
//     -> true ou false
// array
//     -> (Matriz) lista de informações
//     -> [1,2,3,4]
// Object
//     {
//         "chave": "valor",
//         chave: 1
//     }
// null -> aunsência de valor

// undefined -> indefinido
// NaN -> não é um numero ex: 10/"olá"

/* 

    Tratamento de Dados

*/
// String
let textoCompleto = "olá tudo bem com você tudo"

console.log(textoCompleto.toUpperCase())
console.log(textoCompleto.toLowerCase())
console.log(textoCompleto.replace("tudo", "1234"))
// não existe replaceAll no node, tenho que utilizar replace com regex

let numeroEmString = String(1.56)
console.log(numeroEmString)
console.log(typeof numeroEmString)

// Number 
let stringEmNumero = Number("1.15")
console.log(stringEmNumero)
console.log(typeof stringEmNumero)

console.log(Number.parseInt("1.58"))
let testandoParseFloat = Number.parseFloat(20)
console.log(testandoParseFloat.toFixed(4))

// Array
let listaDeCarros = ["Gol", "Uno", "Corola", "Civic"]
console.log(listaDeCarros)

listaDeCarros.push("Lancer")
console.log(listaDeCarros)

listaDeCarros.pop()
console.log(listaDeCarros)

// Object
let pessoa = {
    nome: "Gustavo Clay",
    idade: 20,
    curso: "ADS",
    matricula: "202255522",
    instituicao: "IESB",
    endereco: {
        cep: "72000000",
        cidade: "Cei",
        numero: 20
    }
}

// console.log(pessoa)
console.log(pessoa.nome)
// console.log(pessoa.endereco)

pessoa.nome = "Carlos andrade"
console.log(pessoa.nome.toUpperCase())

    // Operadores Aritméticos
    // + - * / % **
    // precedência
    // ()
    // **
    //  * / %
    // + -
    // Math 


    // Operadores relacionais
    // > < >= <=
    // == !=  igual e difente

    // compara valor e tipo
    // === !== igualdade restrita e diferenca restrita


    // Operadores lógicos
    // ! negação
    // && E
    // || OU

    // IF ELSE

    // if(condicao) {
    //     acao
    // }

let idade = 16

if(idade >= 18){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

let curso = "ads"
idade = 20

if(curso == "ads" || idade >= 18) {
    console.log("confirmado")
} else {
    console.log("negado")
}

if(curso != "ads") {
    console.log("o curso não é ads")
}

if (curso == "ads") {
    console.log("curso é ads")
} if (idade >= 18) {
    console.log("maior de idade")
} else {
    console.log("nenhuma condição atendida")
}


// Repetição
// for (inicializacao; condicao; incremento) {
//     acao
// }

for (let i = 0; i < 10; i++) {
    console.log("contador: ", i)
    if(i == 5){
        i = 11
    }
    console.log("loop")
}


// funcao sem parametros e sem retorno
// function executa() {
//     console.log("Chamando funcao executa")
// }

// funcao com parametro e sem retorno
function executa(nome) {
    console.log("Chamando funcao executa com parametro")
    console.log(nome)
}

// executa()
executa()


console.log(soma(2,2))

// funcao com retorno
function soma(numA, numB) {
    return numA + numB
}

let resultado = soma(2,4)
console.log(resultado)

// console.log("CHAMANDO MULTIPLICAR ANTES", multiplicar(2, 2))

const multiplicar = function (numA, numB){
    return numA * numB
}

console.log("CHAMANDO MULTIPLICAR DEPOIS", multiplicar(2, 2))


const teste = () => console.log("TESTE")

teste()

const somaArrow = (numA, numB) => numA + numB

console.log("CHAMANDO somaArrow", somaArrow(2,5))



