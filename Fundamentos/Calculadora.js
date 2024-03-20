// Criando um modulo (script reutilizável)
const somar = function (numA, numB){
    return numA + numB
}

const subtrair = function (numA, numB) {
    return numA - numB
}

const multiplicar = function (numA, numB) {
    return numA * numB
}

const dividir = function (numA, numB) {
    return numA / numB
}

// exportandos as funcionalidades
module.exports = {
    somar, subtrair, multiplicar, dividir
}
